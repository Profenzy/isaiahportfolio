import Card from "./Card";
import EducationIcon from "../../assets/icons/icon-education.svg";

function Education() {
  return (
    <Card 
      title="Education & Foundations" 
      icon={<img src={EducationIcon} className="w-5 h-5 invert opacity-90" alt="" />}
      accent="amber"
    >
      <div className="text-sm text-[#9e9b93] leading-relaxed space-y-3">
        <div>
          <span className="micro-label text-amber-400 block mb-1">
            Degree Program
          </span>
          <p className="font-display font-medium text-[#f5f2eb] text-base">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-xs text-[#9e9b93] mt-0.5">
            Our Lady of Fatima University – Valenzuela
          </p>
        </div>

        <div className="pt-2 border-t border-[#232631]/60">
          <p className="text-xs text-[#9e9b93]">
            Curriculum emphasis on Software Architecture, Web & Distributed Systems, Data Structures, and Algorithmic Design.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Education;
