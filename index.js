
let random_words = [
    "serendipity", "quantum", "ephemeral", "paradigm", "resilience",
    "enigma", "nostalgia", "paradox", "eloquent", "melancholy",
    "epiphany", "ethereal", "synchronicity", "labyrinth", "euphoria",
    "catalyst", "sublime", "odyssey", "nebula", "metamorphosis",
    "quintessence", "entropy", "renaissance", "enigmatic", "utopia",
    "zeitgeist", "ephemeral", "juxtaposition", "symbiosis", "epiphany",
    "anomaly", "dichotomy", "paradigm", "zen", "serendipity",
    "euphoria", "enigma", "ethereal", "paradox", "synergy",
    "catalyst", "quantum", "renaissance", "resilience", "nebula",
    "quintessence", "synchronicity", "sublime", "epiphany", "entropy",
    "nostalgia", "odyssey", "metamorphosis", "labyrinth", "zeitgeist",
    "utopia", "melancholy", "eloquent", "symbiosis", "ephemeral",
    "juxtaposition", "dichotomy", "anomaly", "paradigm", "zen",
    "serendipity", "euphoria", "enigma", "ethereal", "paradox",
    "synergy", "catalyst", "quantum", "renaissance", "resilience",
    "nebula", "quintessence", "synchronicity", "sublime", "epiphany",
    "entropy", "nostalgia", "odyssey", "metamorphosis", "labyrinth",
    "zeitgeist", "utopia", "melancholy", "eloquent", "symbiosis"
]

let btn = document.getElementById('click_btn');
let idx = 0;

btn.addEventListener("click", () => {
    let x = setInterval(() => {
        let y = window.open(`https://www.bing.com/search?q=${random_words[idx]}&form=QBLH&sp=-1&ghc=1&lq=0&pq=hello+worl&sc=11-10&qs=n&sk=&cvid=41DCA8CCE1CF48779C9A0AC58EB1CC69&ghsh=0&ghacc=0&ghpl=`);
        setTimeout(() => y.close(), 1000);
        idx++;
        if (idx >= random_words.length) clearInterval(x);
    }, 1500); // Changed to 1 second for safety
});