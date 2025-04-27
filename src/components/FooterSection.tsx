type FooterSectionProps = {
  title: string;
  links: string[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="">
      <h4 className="font-bold mb-4 ">{title}</h4>
      <ul className="space-y-2 text-[12px] ">
        {links.map((link, idx) => (
          <li key={idx}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
