from django.test import TestCase
from onestock_backend.models import User


# Create your tests here.
class UserModelTest(TestCase):
    
    def setup(self):
        User.objects.create(username = "test", email = "testEmail", password = "testPassword", isSuperUser = "Y")

    def testCorrectness(self):
        testUser = User.objects.get(username = "test")
        self.assertEqual()