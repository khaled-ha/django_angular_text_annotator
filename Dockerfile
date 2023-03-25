# Build Image
FROM    python:3.9-slim as builder
RUN apt-get update

RUN apt-get install -y binutils libproj-dev gdal-bin gpgv2

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

RUN pip install --upgrade pip

COPY  requirements.txt /tmp

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

FROM python:3.9-slim
# Run the image

EXPOSE  8000/tcp

RUN     mkdir -p /ubia_test/ && \
        addgroup --gid 9999 python && \
        adduser --system --disabled-password --gecos '' --gid 9999 -uid 9999 python && \
        chown python:python /ubia_test/

# Set the working directory to /jobs-website
WORKDIR /ubia_test

COPY    --from=builder /opt/venv /opt/venv

ENV     PYTHONPATH /ubia_test/
ENV     PATH="/opt/venv/bin:$PATH"
COPY . /ubia_test/

# Gunicorn as app server
CMD ["python", "manage.py", "migrate", "--noinput"]
CMD ["python", "manage.py", "collectstatic", "--noinput"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]