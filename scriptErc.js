
    // Initialize attempt counter
    var attempts = localStorage.getItem("attempts") || 5;
    var lockedOut = localStorage.getItem("lockedOut") === "true";
    var lockOutTime = localStorage.getItem("lockOutTime");
    var timerInterval;

    // Define password and redirect URLs
    const passwords = 
    {
      "?%g7erc": "ercRoseMaryMCA.html",
       "2h5d7": "ercS2024Nur2KamsiElvisAlochukwu.html",
       "5kmhb": "ercS2024Nur2VanessaZigwaiGwazah.html",
       "tg4jw":"ercS2024Nur2MakuuochukwuJesseDibor.html",
       "e9ae7":"ercS2024Nur2EbunoliwaGreatnessAkinlaja.html",
       "5fhgt":"ercS2024Nur2SamuelOseremeAigbokhan.html",
       "2f2jm":"ercS2024Nur2OprahVakuMadugu.html",
       "vv3c9": "ercS2024Nur2JaasielJeremiah.html",
       "98uno":"ercS2024Nur2MiraOmowumiAranndnise.html",
       "h5c1k":"ercS2024Nur2MichelleChisomIjeoma.html",
       "s7kuz":"ercS2024Nur2MaxwellAchezornoAfamefula.html",
       "h5c1h":"ercS2024Nur2ValeriChikaNwani.html",
       "kfx41":"ercS2024Nur2DonaldOchukoImereti.html",
       "3g247":"ercS2024Nur2ChristensenChiemezuOnyekwere.html",
       "y7u2t":"ercS2024Nur2OnyedikaChukwuEmmanuelDibor.html",
       "y7u2t":"ercS2024Kg2DanielOdafeImereti.html",
       "148fp":"ercS2024Kg2ChristinaChidinduOnyekwere.html",
      "fxc33g": "ercS2024Kg2HabibaRomolaOyeniyi.html",
       "82a0x": "ercS2024Kg2AnnetteOghenewairheOki.html",
       "82aht": "ercS2024Kg2InemesitDelightAdoniram.html",
       "nz4gc":"ercS2024Kg2LatestMiracleUgoezeFaithtGodwin.html",
       "5kfvy":"ercS2024Kg2JeremyIfechukwudeOrji.html",
       "n6hhj":"ercS2024Kg2VictorChukwuebukaPobeni.html",
       "n6hhj":"ercS2024Kg2OliviaIhotuAugustine.html",
       "xe5x1": "ercS2024Kg2DanielChideraIjeoma.html",
       "2n3eh":"ercS2024Kg2JoelObaloluwaJoesph.html",
       "wsg71":"ercS2024Kg2SomtochukwuGabriellaChukwunete.html",
       "917no":"ercS2024Kg2ChinanuEmmanuelChinedu.html",
       "5cwdh":"ercS2024Kg1AyomidePerculiarOdelusi.html",
       "8ps2v":"ercS2024Kg1ChikaimaMarvelousKenneth.html",
       "y2gru":"ercS2024Kg1ChideraGabrielEkweanua.html",
       "zn3as":"ercS2024Kg1IsaacIremideOlowokere.html",
       "g8djt":"ercS2024Kg1SaddiqAbubakarAminu.html",
       "6az90":"ercS2024Jss1FavourOjonikeEkele.html",
       "ird8u": "ercS2024Jss1MichelleAyanfeOgedengbe.html",
       "n9ght": "ercS2024Jss1ChinazaStephenIkebuaku.html",
       "t5nec": "ercS2024Jss1ChinazaDivineKenneth.html",
       "nzfgc":"ercS2024Jss1TahliaSimiDaniel.html",
       "rw34u":"ercS2024Kg2JeremyIfechukwudeOrji.html",
       "mfzt3":"ercS2024Jss1MusaTobilobaIbrahim.html",
       "6uy3c":"ercS2024Jss1ChidiebeSamuelUgwoeru",
       "nfws4":"ercS2024Jss1MaridiyatMurtalaOgohi.html",   
       "q6e7k":"ercS2024Jss1BiodunTajideenIbrahim.html",


       "5cwdh":"ercS2024Kg1AyomidePerculiarOdelusi.html",
       "8ps2v":"ercS2024Kg1ChikaimaMarvelousKenneth.html",
       "y2gru":"ercS2024Kg1ChideraGabrielEkweanua.html",
       "zn3as":"ercS2024Kg1IsaacIremideOlowokere.html",
       "g8djt":"ercS2024Kg1SaddiqAbubakarAminu.html",
       "6az90":"ercS2024Jss1FavourOjonikeEkele.html",
       "ird8u": "ercS2024Jss1MichelleAyanfeOgedengbe.html",



          };

    document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault();

      // Get password
      var passwordInput = document.getElementById('password').value;

      // Check credentials
      if (passwords[passwordInput]) {
        window.location.href = passwords[passwordInput];
        alert("Your N1,100 Expires\n2025 - Sept - 10 !!!\n");
      } else {
        attempts--;
        localStorage.setItem("attempts", attempts);

        // Display error message
        if (attempts >= 0) {
          document.getElementById("error-message").innerHTML = "Incorrect password. Attempts left: " + attempts;
        } else {
          lockedOut = true;
          lockOutTime = Date.now() + 3600000; // 1 hour
          localStorage.setItem("lockedOut", true);
          localStorage.setItem("lockOutTime", lockOutTime);
          document.getElementById("error-message").innerHTML = "Account locked. Try again in 1 hour.";
          document.getElementById("login-form").style.display = "none";
          startLockoutTimer();
        }
      }
    });

    // Check if account is locked
    if (lockedOut && lockOutTime) {
      var currentTime = Date.now();
      if (currentTime < parseInt(lockOutTime)) {
        document.getElementById("error-message").innerHTML = "Account locked. Try again in " + Math.ceil((parseInt(lockOutTime) - currentTime) / 60000) + " minutes.";
        document.getElementById("login-form").style.display = "none";
        startLockoutTimer();
      } else {
        lockedOut = false;
        localStorage.setItem("lockedOut", false);
        attempts = 5;
        localStorage.setItem("attempts", attempts);
      }
    }

    function startLockoutTimer() {
      var timeLeft = parseInt(lockOutTime) - Date.now();
      var minutes = Math.floor(timeLeft / 60000);
      var seconds = Math.floor((timeLeft % 60000) / 1000);

      document.getElementById("lockout-timer").innerHTML = "Time left: " + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

      timerInterval = setInterval(function() {
        timeLeft = parseInt(lockOutTime) - Date.now();
        minutes = Math.floor(timeLeft / 60000);
        seconds = Math.floor((timeLeft % 60000) / 1000);

        document.getElementById("lockout-timer").innerHTML = "Time left: " + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          lockedOut = false;
          localStorage.setItem("lockedOut", false);
          attempts = 5;
          localStorage.setItem("attempts", attempts);
          document.getElementById("login-form").style.display = "block";
          document.getElementById("error-message").innerHTML = "";
          document.getElementById("lockout-timer").innerHTML = "";
        }
      }, 1000);
    }
  