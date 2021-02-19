function nb_year(p0, percent, aug, p) {//initial population,growth%,inhabitants coming ,<=p pop to surpass
    let inhabitants = p0;
    let years = 0;
    while (inhabitants <= p) {
        inhabitants += inhabitants * (percent / 100) + aug;
        years++;
    }
    console.log(years)
}
nb_year(1500000, 2.5, 10000, 2000000)