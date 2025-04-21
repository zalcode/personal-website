import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function ContactCard() {
  const contacts = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/zalcode",
      link: "https://github.com/zalcode",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/muhzal",
      link: "https://www.linkedin.com/in/muhzal/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "muhzal94@gmail.com",
      link: "mailto:muhzal94@gmail.com",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      value: "zal.my.id",
      link: "https://zal.my.id",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="opacity-90">
              Feel free to reach out for opportunities or just to say hello!
            </p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contact.label}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="mailto:muhzal94@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
