// Handle form submission on index.html
if (window.location.pathname.endsWith('index.html')) {
    document.getElementById('interestForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const inspiration = document.getElementById('inspiration').value;
      const interest = document.getElementById('interest').value;
  
      if (!name || !age || !inspiration || !interest) {
        alert("Please fill all the fields.");
        return;
      }
  
      const params = new URLSearchParams({
        name,
        age,
        inspiration,
        interest
      });
  
      window.location.href = `result.html?${params.toString()}`;
    });
  }
  
  // Handle displaying result on result.html
  if (window.location.pathname.endsWith('result.html')) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const age = params.get('age');
    const inspiration = params.get('inspiration');
    const interest = params.get('interest');
  
      const interestDescription = {
          Art: "Art allows you to express creativity and view the world through unique perspectives. It bridges cultures, conveys emotions, and can be a powerful medium for storytelling and activism. Whether through painting, sculpture, or digital art, it inspires imagination and evokes deep feelings.",

          Technology: "Technology empowers you to innovate and shape the future. It drives progress in every field, from medicine to space exploration. By embracing technology, you can solve complex problems, create smarter systems, and transform how people live and work around the world.",

          Reading: "Reading enriches the mind, enhances knowledge, and fuels imagination. It allows you to explore new worlds, gain wisdom from the past, and expand your understanding of diverse perspectives. Through reading, you develop critical thinking, empathy, and creativity.",

          Sports: "Sports foster teamwork, resilience, and physical fitness. They teach discipline, improve mental health, and build camaraderie among teammates. Whether playing or watching, sports bring communities together and inspire moments of triumph and perseverance.",

          Music: "Music is the universal language of emotions and creativity. It has the power to uplift spirits, connect cultures, and convey feelings words cannot express. From classical symphonies to modern beats, music influences moods and serves as a timeless form of expression.",

          Science: "Science helps you explore the universe and discover new possibilities. It fuels curiosity and provides a framework for understanding the natural world. From uncovering the mysteries of the cosmos to improving daily life, science empowers humanity to innovate and thrive."
      };
      
  
    const interestImages = {
      Art: "images/art.jpg",
      Technology: "images/technology.jpg",
      Reading: "images/reading.jpg",
      Sports: "images/sports.jpg",
      Music: "images/music.jpg",
      Science: "images/science.jpg"
    };
  
    const description = `<strong>${name}</strong>, aged <strong>${age}</strong>, who is inspired by "<em>${inspiration}</em>", your interest in <strong>${interest}</strong> means: <br> ${interestDescription[interest]}`;
    const imageUrl = interestImages[interest];
  
    document.getElementById('description').innerHTML = description;
    document.getElementById('interestImage').src = imageUrl;
  }
  