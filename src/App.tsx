import { useState } from 'react';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Button } from './components/ui/button';
import { Briefcase, Search, Users } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    role: '',
    skills: '',
    cgpaImportant: '',
    experienceImportant: '',
    otherFields: ''
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* LinkedIn-style Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A66C2] rounded flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900">Hiring Platform</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <Users className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-8 mb-6">
          <h1 className="text-gray-900 mb-2">Create a job posting</h1>
          <p className="text-gray-600">Tell us about the role you're hiring for</p>
        </div>

        {/* Form Sections */}
        <div className="space-y-6">
          {/* Row 1: Role and Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
              <Label htmlFor="role" className="text-gray-900 mb-3 block">
                What role are you hiring for?
              </Label>
              <Input
                id="role"
                placeholder="e.g., Senior Software Engineer"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="border-gray-400 focus:border-[#0A66C2] focus:ring-[#0A66C2] bg-white"
              />
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
              <Label htmlFor="skills" className="text-gray-900 mb-3 block">
                What skills are mandatory?
              </Label>
              <Input
                id="skills"
                placeholder="e.g., React, TypeScript, Node.js"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="border-gray-400 focus:border-[#0A66C2] focus:ring-[#0A66C2] bg-white"
              />
            </div>
          </div>

          {/* Row 2: CGPA and Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Question 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
              <Label className="text-gray-900 mb-4 block">
                Is CGPA important?
              </Label>
              <RadioGroup
                value={formData.cgpaImportant}
                onValueChange={(value) => setFormData({ ...formData, cgpaImportant: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="yes" id="cgpa-yes" className="border-gray-400" />
                  <Label htmlFor="cgpa-yes" className="cursor-pointer flex-1">Yes, it's required</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="no" id="cgpa-no" className="border-gray-400" />
                  <Label htmlFor="cgpa-no" className="cursor-pointer flex-1">No, not important</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="somewhat" id="cgpa-somewhat" className="border-gray-400" />
                  <Label htmlFor="cgpa-somewhat" className="cursor-pointer flex-1">Somewhat important</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
              <Label className="text-gray-900 mb-4 block">
                Is years of experience important?
              </Label>
              <RadioGroup
                value={formData.experienceImportant}
                onValueChange={(value) => setFormData({ ...formData, experienceImportant: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="yes" id="exp-yes" className="border-gray-400" />
                  <Label htmlFor="exp-yes" className="cursor-pointer flex-1">Yes, it's required</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="no" id="exp-no" className="border-gray-400" />
                  <Label htmlFor="exp-no" className="cursor-pointer flex-1">No, not important</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="somewhat" id="exp-somewhat" className="border-gray-400" />
                  <Label htmlFor="exp-somewhat" className="cursor-pointer flex-1">Somewhat important</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Row 3: Other Considerations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <Label htmlFor="other" className="text-gray-900 mb-3 block">
              Tell us other fields of consideration
            </Label>
            <Textarea
              id="other"
              placeholder="Share any additional requirements, preferences, or considerations for the ideal candidate..."
              value={formData.otherFields}
              onChange={(e) => setFormData({ ...formData, otherFields: e.target.value })}
              className="border-gray-400 focus:border-[#0A66C2] focus:ring-[#0A66C2] min-h-[120px] resize-none bg-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <Button 
              variant="outline"
              className="border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 px-8"
            >
              Save as draft
            </Button>
            <Button 
              className="bg-[#0A66C2] hover:bg-[#004182] text-white px-8"
            >
              Post job
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p>Need help? <a href="#" className="text-[#0A66C2] hover:underline">Visit our Help Center</a></p>
        </div>
      </div>
    </div>
  );
}
