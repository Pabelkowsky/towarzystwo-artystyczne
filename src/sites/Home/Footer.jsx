import { useOutletContext } from 'react-router-dom';

export default function Footer() {
  const { handleNavigate } = useOutletContext(); // Dodane

  const navItems = [
    { label: 'Strona główna', path: '/' },
    { label: 'Nowości', path: '/nowosci' },
    { label: 'Jak dołączyć', path: '/jak-dolaczyc' },
    { label: 'Rękodzieło', path: '/rekodzielo' },
    { label: 'Literatura', path: '/literatura' },
    { label: 'Film i fotografia', path: '/film-i-fotografia' },
    { label: 'Malarstwo', path: '/malarstwo' },
    { label: 'Muzyka', path: '/muzyka' },
    { label: 'Sztuka cyfrowa', path: '/sztuka-cyfrowa' },
  ];

  const emails = [
    'pawelgarncarz88@gmail.com',
    'pawelgarncarz88@gmail.coma',
    'pawelgarncarz88@gmail.com',
  ];

  const phones = ['790-558-571', '790-558-571', '790-558-571'];

  return (
    <section className="bg-[#090909] overflow-hidden py-[4vw] sm:py-[2vw]">
      <div className="flex flex-col items-center gap-[12vw] sm:gap-[10vw] lg:gap-[5vw] relative">
        <p className="text-[15vw] sm:text-[8.5vw] leading-[0.9]">Porozmawiajmy</p>

        <div className="flex lg:flex-row flex-col lg:items-start items-center w-full justify-center gap-[10vw] lg:gap-[6vw] text-[var(--text-secondary)]">
          <div className="flex gap-[20vw] sm:gap-[5vw]">
            <div className="flex flex-col gap-[2.5vw] lg:gap-[1.4vw]">
              {navItems.slice(0, 5).map((item, index) => (
                <div className="flex gap-[1vw]" key={item.path}>
                  <p className="leading-[0.9] text-[4vw] sm:text-[2.2vw] lg:text-[1.5vw]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span
                    className="link-underline leading-[0.8] text-[6vw] lg:text-[2.8vw] cursor-pointer"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[2.5vw] lg:gap-[1.4vw]">
              {navItems.slice(5).map((item, index) => (
                <div className="flex gap-[1vw]" key={item.path}>
                  <p className="leading-[0.9] text-[4vw] sm:text-[2.2vw] lg:text-[1.5vw]">
                    {String(index + 6).padStart(2, '0')}
                  </p>
                  <span
                    className="link-underline leading-[0.8] text-[6vw] lg:text-[2.8vw] cursor-pointer"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-[5vw]">
            <div className="flex flex-col gap-[2.5vw] lg:gap-[1.4vw]">
              {emails.map((email, i) => (
                <div key={i}>
                  <a
                    className="link-underline leading-[0.8] text-[6vw] lg:text-[2.8vw]"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[2.5vw] lg:gap-[1.4vw]">
              {phones.map((phone, i) => (
                <div key={i}>
                  <a
                    className="link-underline leading-[0.8] text-[6vw] lg:text-[2.8vw]"
                    href={`tel:${phone.replace(/-/g, '')}`}
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[8.5vw] leading-[0.9]">Limanowskie Stowarzyszenie Poetów </p>
      </div>
    </section>
  );
}
