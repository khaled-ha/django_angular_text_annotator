from rest_framework.views import APIView
from rest_framework.response import Response


class DataView(APIView):
    def get(self, request, *args, **kwargs):
        data = {
            "document": "3+ years Swift & Objective-C and experience with 105 internals Experience building an entire app fromscratch and ideally a portfolio of apps featured in the App Store Someone who knows every trick in the book on UTtransitions, network communication and memory/battery efficiency Strong UT/design skill experience is a plus",
            "annotation": [
                {
                    "start": 0,
                    "end": 61,
                    "label": "EXPERIENCE",
                    "text": "3 years Swift & Objective-C and experience with105 internals",
                },
                {
                    "start": 63,
                    "end": 72,
                    "label": "DIPLOMA MAJOR",
                    "text": "Experience",
                },
                {"start": 93, "end": 95, "label": "SKILLS", "text": "app "},
                {"start": 158, "end": 160, "label": "SKILLS", "text": "App"},
                {"start": 213, "end": 226, "label": "SKILLS", "text": "UI transitions"},
                {
                    "start": 229,
                    "end": 249,
                    "label": "SKILLS",
                    "text": "network communication ",
                },
                {"start": 255, "end": 268, "label": "SKILLS", "text": "memory battery"},
                {"start": 288, "end": 296, "label": "SKILLS", "text": "UI/design "},
            ],
        }
        return Response({'status': 'success', "Data": data}, status=200)

    def post(self, request):
        print(self.request.data)
        return Response({'status': 'success'}, status=200)
