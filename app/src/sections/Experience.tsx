const experiences = [
  { period: 'Feb 2026—Now', title: 'Research Assistant', company: 'USC Viterbi School of Engineering', location: 'Los Angeles, CA', achievements: ['Won Best of Multimodal Understanding at the Amazon Nova AI Hackathon', 'Designed a YOLO11 fall detection system with 0.923 mAP@0.5 and 94% recall', 'Built natural-language video queries using SAM3 segmentation and temporal analysis'] },
  { period: 'Jun—Sep 2025', title: 'Research Intern', company: 'USC Institute for Creative Technologies', location: 'Los Angeles, CA', achievements: ['Built a 3D reconstruction pipeline using RDD SfM, Doppelganger++, and Gaussian Splatting', 'Reduced reconstruction time from 8 to 5 minutes through optimized feature extraction', 'Presented the final pipeline demo to the lab team'] },
  { period: 'Jun 2022—Jul 2023', title: 'Research Intern', company: 'IIT Hyderabad', location: 'Hyderabad, India', achievements: ['Co-authored an IEEE Access survey paper with a researcher from Osaka University', 'Analyzed 11 cellular network monitoring applications across 2G–5G', 'Captured physical-layer cellular data using MobileInsight and Dragonet'] },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section-frame content-section">
      <header className="experience-heading"><span>Experience</span><h2>Work with<br />measurable impact.</h2></header>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article key={experience.period} className="experience-row">
            <span className="experience-index">0{index + 1}</span>
            <p className="experience-period">{experience.period}</p>
            <div><h3>{experience.title}</h3><p className="experience-company">{experience.company}<br /><small>{experience.location}</small></p></div>
            <ul>{experience.achievements.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
