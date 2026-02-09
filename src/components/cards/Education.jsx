import Card from "./Card";
import EducationIcon from "../../assets/icons/icon-education.svg";

function Education() {
  return (
    <Card 
    title="Education" 
    icon={<img src={EducationIcon} className="w-5 h-5" alt="" />}
    >
      <div className="text-sm text-gray-600 leading-relaxed">
        <p className="font-medium text-gray-800">
          Bachelor of Science in Computer Science
        </p>
        <p>Our Lady of Fatima University – Valenzuela</p>
        <p className="text-gray-500 mt-1">
          Focus on Software Engineering, Web Development, and Systems Design
        </p>
      </div>
    </Card>
  );
}

export default Education;
