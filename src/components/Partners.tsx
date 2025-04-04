import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: "Code Tailor", img: "/img/prijatelji/ct-logo-black.png", url: "https://codetailor.rs" },
    { name: "Škola Rajak", img: "/img/prijatelji/skola-rajak.png", url: "https://www.rajak.rs/" },
    { name: "Podcast IT tipa", img: "/img/prijatelji/podcast-it-tipa-1024x359.png", url: "https://itpodkast.com/" },
    { name: "Culture Impact", img: "/img/prijatelji/culture-impact.jpeg", url: "https://culturemanagement.rs/" },
    { name: "VeloxDB", img: "/img/prijatelji/veloxdb.png", url: "https://www.vlxdb.com/", darkBg: true },
    { name: "Positive Tech", img: "/img/prijatelji/positivetech-logo-dark.png", url: "https://positivetechit.com/", darkBg: true },
    { name: "NTP NS", img: "/img/prijatelji/ntpns.png", url: "https://ntpns.rs/" },
    { name: "Heapspace", img: "/img/prijatelji/heapspace.png", url: "https://heapspace.rs/" }
  ];

  return (
    <section id="friends">
      <div>
        <div>
          <h5>Naši prijatelji</h5>
          <p>Firme i organizacije koje podržavaju rad <em>Developers club</em>-a.</p>
        </div>
        <div>
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image 
                src={partner.img} 
                alt={partner.name} 
                width={96} 
                height={48} 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}