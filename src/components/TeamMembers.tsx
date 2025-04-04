import Image from 'next/image';

export default function TeamMembers() {
  const members = [
    { name: "Aleksandar Sabo", img: "/img/members/aleksandar-sabo.jpg" },
    { name: "Sebastian Novak", img: "/img/members/sebastian-novak.jpeg" },
    { name: "Dejan Miličić", img: "/img/members/dejan-milicic.jpg" },
    { name: "Silvija Baro-Čalija", img: "/img/members/silvija-baro-čalija.jpg" },
    { name: "Ognjen Stanić", img: "/img/members/ognjen-stanić.jpg" },
    { name: "Nikola Knežević", img: "/img/members/nikola-knezevic.jpg" }
  ];

  return (
    <section id="members">
      <div>
        <div>
          <h5>Upoznaj naš tim</h5>
        </div>
        <div>
          {members.map((member, index) => (
            <div key={index}>
              <div>
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  width={96} 
                  height={96} 
                />
                <h5>{member.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}