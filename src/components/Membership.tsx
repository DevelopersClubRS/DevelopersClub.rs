import Image from 'next/image';

export default function Membership() {
  const benefits = [
    "Pristup ekskluzivnim događajima i radionicama",
    "Mogućnost umrežavanja sa stručnjacima iz različitih oblasti IT industrije",
    "Priliku da učestvujete u zajedničkim projektima i stvarate inovativna rešenja",
    "Pristup resursima koji vam pomažu da postanete autoritet u svojoj oblasti"
  ];

  return (
    <section id="membership">
      <div>
        {/* Text Section */}
        <div>
          <h1>Prednosti članstva u Developers Club-u</h1>
          <p>Kao član Developers Club-a, dobićete:</p>

          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div>
          <Image 
            src="/img/welcome.jpg" 
            alt="Welcome to Developers Club" 
            width={600} 
            height={400}
          />
        </div>
      </div>
    </section>
  );
}