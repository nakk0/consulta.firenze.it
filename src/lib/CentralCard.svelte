<script>
    import ig_logo from "../assets/logos/instagram.webp";
    import gmail_logo from "../assets/logos/gmail.webp";
    import cps_logo from "../assets/logos/consulta.jpeg";
    import fb_logo from "../assets/logos/facebook.png";
    import firenze from "../assets/images/firenze.jpg";

    let paragraphs = [
        {
            title: "Rappresentanza Studenti",
            p: "La Consulta Provinciale degli Studenti di Firenze è un organismo rappresentativo che svolge un ruolo fondamentale nell'ambito della partecipazione studentesca e nella promozione degli interessi degli studenti a livello locale. Fondata con l'obiettivo di favorire il coinvolgimento attivo degli studenti nelle decisioni che riguardano il mondo scolastico e universitario, la Consulta funge da ponte tra gli studenti e le istituzioni educative.",
        },
        {
            title: "Partecipazione Attiva",
            p: "Composta da rappresentanti eletti dagli studenti stessi, la Consulta Provinciale di Firenze si impegna a rappresentare in modo efficace le varie esigenze e opinioni degli studenti, contribuendo così a creare un dialogo costruttivo con le istituzioni scolastiche, universitarie e locali. Attraverso la partecipazione attiva, la Consulta cerca di affrontare le problematiche quotidiane che gli studenti possono incontrare nel loro percorso educativo, promuovendo al contempo iniziative e progetti che possano migliorare la qualità dell'istruzione e della vita studentesca.",
        },
        {
            title: "Iniziative Studentesche",
            p: "Oltre a svolgere un ruolo di advocacy, la Consulta Provinciale degli Studenti di Firenze organizza anche eventi, incontri e campagne informative, al fine di sensibilizzare la comunità studentesca su questioni rilevanti e incoraggiare la partecipazione attiva. In questo modo, la Consulta diventa un punto di riferimento per gli studenti che desiderano essere coinvolti nella costruzione di un ambiente educativo più inclusivo, equo e partecipativo.",
        },
    ];

    let logos = [
        {
            src: ig_logo,
            alt: "instagram logo",
            url: "https://www.instagram.com/cps_firenze/",
        },
        {
            src: gmail_logo,
            alt: "gmail logo",
            url: "mailto:consultadifirenze@gmail.com",
        },
        {
            src: cps_logo,
            alt: "website consulta",
            url: "https://cms.csa.fi.it/Consulta/tabid/259/Default.aspx",
        },
        {
            src: fb_logo,
            alt: "facebook logo",
            url: "https://www.facebook.com/cpsfi/?locale=it_IT",
        },
    ];

    let colors = {
        card: "#ADA1CC",
        p: "#FDD9C3",
    };
</script>

<main>
    <div
        class="min-h-screen xl:w-2/3 lg:w-3/4 sm:w-5/6 mx-auto sm:my-2 bg-[#24225C] sm:bg-[#ADA1CC] sm:rounded-3xl shadow-lg"
    >
        <p class="md:text-5xl sm:text-4xl text-3xl font-bold text-center p-10 sm:p-20 text-[#FBB14D] sm:text-[#000000]">
            Consulta Provinciale Degli Studenti Firenze
        </p>

        <div class="flex justify-center mx-2 max-w-5/6 ">
            <img
                src={firenze}
                alt="foto palazzo pegaso"
                class="rounded-3xl sm:w-5/6 sm:border-0 border border-[#FBB14D] shadow-lg"
            />
        </div>
        <div class="grid grid-cols-1 place-items-center mx-2 sm:mx-0">
            {#each paragraphs as { title, p }}
                <div
                    class="sm:w-5/6 text-center bg-[#9593C3] my-5 p-3 rounded-xl text-justify border sm:border-0 border-[#FBB14D] shadow-lg"
                >
                    <p class="text-2xl font-[600] text-start my-2">{title}</p>
                    <p>{p}</p>
                </div>
            {/each}
            <div
                class="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 sm:w-5/6 my-5"
            >
                {#each logos as { src, alt, url }}
                    <div
                        class="flex justify-center bg-[#9593C3] rounded-xl w-full min-h-full shadow-lg"
                    >
                        <a
                            href={url}
                            target="_blank"
                            class="flex justify-center"
                        >
                            <img
                                {src}
                                {alt}
                                class="w-1/4 my-5 object-contain"
                            />
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>
