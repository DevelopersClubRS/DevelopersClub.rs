import Image from 'next/image'

export default function Values() {
  const values = [
    {
      img: '/img/vrednosti-integritet.jpg',
      alt: 'Integritet',
      title: 'Integritet',
      text: 'Biramo ispravno, ne brže ili lakše. Stojimo iza svojih reči i dela, jer verujemo da je integritet temelj svakog uspeha.',
    },
    {
      img: '/img/vrednosti-majstorstvo.jpg',
      alt: 'Majstorstvo',
      title: 'Majstorstvo',
      text: 'Naš cilj je da podignemo stručnost na najviši nivo, inoviramo i postavljamo prava pitanja kako bismo našli najbolja rešenja za izazove pred nama.',
    },
    {
      img: '/img/vrednosti-profesionalizam.jpg',
      alt: 'Profesionalizam',
      title: 'Profesionalizam',
      text: 'Posvećeni smo kvalitetu, ponosimo se svojim radom i uvek se trudimo da završimo svaki zadatak sa vrhunskim rezultatom.',
    },
    {
      img: '/img/vrednosti-inspiracija.jpg',
      alt: 'Inspiracija',
      title: 'Inspiracija',
      text: 'Trudimo se da budemo inspiracija drugima, motivišući ljude da postanu bolji i ostvare više nego što su mislili da mogu.',
    },
    {
      img: '/img/vrednosti-neprepotentnost.jpg',
      alt: 'Neprepotentnost',
      title: 'Neprepotentnost',
      text: 'Svesni smo svojih granica i prihvatamo činjenicu da ne možemo znati sve. Greške su deo procesa učenja, a mi uvek težimo napretku.',
    },
  ]

  return (
    <section id="vrednosti">
      <div>
        <h5>Naše vrednosti</h5>
        <div>
          {values.map((value, index) => (
            <div key={index}>
              <a>
                <Image src={value.img} alt={value.alt} width={500} height={300} />
              </a>
              <div>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
