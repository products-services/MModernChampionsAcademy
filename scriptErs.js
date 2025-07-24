 
  
    var attempts = localStorage.getItem("attempts") || 5;
    var lockedOut = localStorage.getItem("lockedOut") === "true";
    var lockOutTime = localStorage.getItem("lockOutTime");
    var timerInterval;

    
    const passwords = 
    {






      "d3dkz": "ercRoseMaryMCA.html",




       "5cwdh":"ercS2024Kg1AyomidePerculiarOdelusi.html",
       "8ps2v":"ercS2024Kg1ChikaimaMarvelousKenneth.html",
       "y2gru":"ercS2024Kg1ChideraGabrielEkweanua.html",
       "zn3as":"ercS2024Kg1IsaacIremideOlowokere.html",
       "g8djt":"ercS2024Kg1SaddiqAbubakarAminu.html",
       "gd7ft":"ercS2024Kg1ChizaramDaniellaOkezie",
       "2ypdc":"ercS2024Kg1ChigoziemJustinOzode.html",
       "6yzg8":"ercS2024Kg1GraceOghenetegaOgheneosieme.html",
       "grf8u": "ercS2024Kg1ChikamsoAlexandaHenry.html",
       "k9pht": "ercS2024Kg1EseogheneDavidOki.html",
       "23ftg":"ercS2024Kg1VictorUkpahiuojoEzekiel.html",
       "jk66n":"ercS2024Kg1GreatOghenetejiriEmmanuel.html",
       "k55mi":"ercS2024Kg1AdaugoPurityAkubudo.html",
       "7r671":"ercS2024Kg1ChukwumaobimRyansmartObidigbo.html",




       


       "y7u2t":"ercS2024Kg2DanielOdafeImereti.html",
       "148fp":"ercS2024Kg2ChristinaChidinduOnyekwere.html",
      "fxc33g": "ercS2024Kg2HabibaRomolaOyeniyi.html",
       "82a0x": "ercS2024Kg2AnnetteOghenewairheOki.html",
       "82aht": "ercS2024Kg2InemesitDelightAdoniram.html",
       "nz4gc":"ercS2024Kg2LatestMiracleUgoezeFaithtGodwin.html",
       "5kfvy":"ercS2024Kg2JeremyIfechukwudeOrji.html",
       "n6hhj":"ercS2024Kg2VictorChukwuebukaPobeni.html",
       "w6thj":"ercS2024Kg2OliviaIhotuAugustine.html",
       "xe5x1": "ercS2024Kg2DanielChideraIjeoma.html",
       "2n3eh":"ercS2024Kg2JoelObaloluwaJoesph.html",
       "wsg71":"ercS2024Kg2SomtochukwuGabriellaChukwunete.html",
       "r6r7y":"ercS2024Kg2EniolaHannanYusuf.html",
       "g6u7u":"ercS2024Kg2OluwatomisiaIsabelOshileye.html",
       "3p2e5":"ercS2024Kg2ChideraDanielNwafor.html",
       "w64zx":"ercS2024Kg2EnochKayodeDosumu.html",
       "c5u1y":"ercS2024Kg2ChinedumCharlesOkoye.html",
       "f443z":"ercS2024Kg2MirabelJoshuaSunday.html",
      "3c6ad":"ercS2024Kg2DavidRekpeneIrem.html",
      "uu4a7":"ercS2024Kg2GodwinModesireAfolayan.html",
       "9s5c5":"ercS2024Kg2IfeadigoSuccessAkubudo.html",

      


       

       "d7tbg":"ercS2024Nur1DestinyTamaramiebiPaul.html", 
       "8r4xf":"ercS2024Nur1IsabellaDauteSoun.html",
       "gd2v5":"ercS2024Nur1MiracleAmarachiBernard.html",
       "xft8y":"ercS2024Nur1AlexanderManaseh.html",
       "7stv1": "ercS2024Nur1PrinceOnyedikachiChanumuya.html",
       "fy3t2": "ercS2024Nur1DanielTomiwaOluwafemi.html",
       "2fty5":"ercS2024Nur1Paul-ElvisChimdiomimiUdeaja.html",
       "a5e79":"ercS2024Nur1JeminaUwakmfonVictor.html",
       "v15b6": "ercS2024Nur1ChiamandaRejoiceKenneth.html",
       "4ew7s": "ercS2024Nur1SamaroVictorElom.html",
       "2rztq":"ercS2024Nur1UgochukwuProsperEzechukwugoziri.html",
       "xk5v4":"ercS2024Nur1OnyedikachukwuAnthonyBenedict.html",
       "7jed3":"ercS2024Nur1OliviaOvigueOgheneosieme.html",
       "5xjpt":"ercS2024Nur1RuthIdongesitIsong.html",
       "y7tbg":"ercS2024Nur1MimiPearlBernard.html",
       "917no":"ercS2024Nur1ChinanuEmmanuelChinedu.html",
       "2f2jm":"ercS2024Nur1OprahVakuMadugu.html",
       "4a5x8":"ercS2024Nur1WashingtonChukwuemekaAmako.html",
       "a8w5z":"ercS2024Nur1ChidaluMiracleChukwudi.html",
       "yar67":"ercS2024Nur1AdaugoLilianeOnyegbuna.html",
       "89tt3":"ercS2024Nur1ChideraDominionEduzor.html",
       "d2a88":"ercS2024Nur1MosesChiziteremUwandu.html",
       "bgbc7":"ercS2024Nur1ChimamandaCathrineOkoli.html",
       "j4x32": "ercS2024Nur1ChimamandaElenaSabastine.html",
       "y7j42":"ercS2024Nur1EmmanuelOgenemairoOgenenkohowo.html",
       "7vq4k":"ercS2024Nur1ChizaramJoanOnwuchekwa.html",
       "5s9jr":"ercS2024Nur1SharonAbiolaIgbinlola.html",
       "59v5j":"ercS2024Nur1ChukwudiegwuGospelIkeme.html",

       
       
  



       "2h5d7": "ercS2024Nur2KamsiElvisAlochukwu.html",
       "5kmhb": "ercS2024Nur2VanessaZigwaiGwazah.html",
       "tg4jw":"ercS2024Nur2MakuuochukwuJesseDibor.html",
       "e9ae7":"ercS2024Nur2EbunoliwaGreatnessAkinlaja.html",
       "5fhgt":"ercS2024Nur2SamuelOseremeAigbokhan.html",
       "vv3c9": "ercS2024Nur2JaasielJeremiah.html",
       "98uno":"ercS2024Nur2MiraOmowumiAranndnise.html",
       "h5c1k":"ercS2024Nur2MichelleChisomIjeoma.html",
       "s7kuz":"ercS2024Nur2MaxwellAchezornoAfamefula.html",
       "h5c1h":"ercS2024Nur2ValeriChikaNwani.html",
       "kfx41":"ercS2024Nur2DonaldOchukoImereti.html",
       "3g247":"ercS2024Nur2ChristensenChiemezuOnyekwere.html",
       "g5d79":"ercS2024Nur2OgechukwuAnnaMuosbo.html",
       "v2j56": "ercS2024Nur2SolomonOchukoOgheneosieme.html", 
       "khj57": "ercS2024Nur2IremideIslamiyatOyeniyi.html",
       "25f9q":"ercS2024Nur2DaisyOjonugwaHenry.html",
       "utpt4":"ercS2024Nur2EmmanuelOcheDennis.html",
       "gh4df":"ercS2024Nur2JoyRenuaOyonmi.html",
       "gty78":"ercS2024Nur2MitchelleChizaramObi-Odunukwe.html",
       "prx45":"ercS2024Nur2EbubechukwuFaustinaOkwuchukwu.html",
       "88bwp":"ercS2024Nur2DashaObiora-JnrNnaji.html",
       "a5qb9":"ercS2024Nur2BeliLoisAdewole.html",
       "2x58p":"ercS2024Nur2ElijahAyodejiAkinsanya.html",
       "3c4sw":"ercS2024Nur2MunachiEmmanuelNwafor.html",
       "n84wx":"ercS2024Nur2MiracleChibuodogwuAnaedo.html",
       "pz41w":"ercS2024Nur2GideonBabangidaAfolayan.html",
       "yg417":"ercS2024Nur2EkenedilichukwuSimonOzor.html",



       "v22t6":"ercS2024Basic1BenaiahIjabaniSylvanus.html",
       "dhk5s":"ercS2024Basic1SomtochukwuGerardOkoye.html",
       "2zftq":"ercS2024Basic1TriumpMunachimsoObinna.html",
       "sk5t4":"ercS2024Basic1AbigailIredeJoseph.html",
       "7hed3":"ercS2024Basic1GreatOyindenfaPaul.html",
       "nx4pt":"ercS2024Basic1WinnerSomtochukwuUche.html",
       "x72bg":"ercS2024Basic1ChukwudaluChristabelChukwunete.html",  
       "8a4yf":"ercS2024Basic1KamsiyochukwuVandoraNwaiwu.html",
       "zd285":"ercS2024Basic1SomtochukwuMichealOkezie.html",
       "tfw8y":"ercS2024Basic1DominionEtiendWisdom.html",
       "9svv1": "ercS2024Basic1ChimaobiDanielChinedu.html",
       "f44t2": "ercS2024Basic1IzuchukwuMichealEzekwuaku.html",
       "2zty9":"ercS2024Basic1PreciousUyaiAdoniram.html",
       "q5f79":"ercS2024Basic1BerniceAkachukwuBernard.html",
       "t5peg": "ercS2024Basic1OluwatomiwaMitchelleOshileye.html", 
       "qz4pc":"ercS2024Basic1AdetomiwaGreatYusuf.html", 
       "mcp7a":"ercS2024Basic1BrightIkojoEzekiel.html",
       "x3a2s":"ercS2024Basic1AmblessAdaezeGodwin.html",
       "g32fw":"ercS2024Basic1DivineJoshuaSunday.html",
        "91etv":"ercS2024Basic1MateusChiagoziemOnyegbuna.html",
       "cfv73":"ercS2024Basic1SuccessWantiwularonJockthan.html",
       "9x17j":"ercS2024Basic1UgochukwuNanielChristopher.html",
       "m29h5":"ercS2024Basic1ChizaramCassandraEjidike.html",

       




       "8admf":"ercS2024Basic2ChizarmChristabelOzode.html",
       "zd2f6":"ercS2024Basic2AsherIjaheendaSylvanus.html",
       "gfg8y":"ercS2024Basic2ExcelDlamaDaniel.html",
       "3s7v1": "ercS2024Basic2JessicaEbikomboierePaul.html",
       "p4yt2": "ercS2024Basic2PrinceMichealKomolafe.html",
       "xzny9":"ercS2024Basic2ChineduSolomonChinedu.html",
       
       "nv83r":"ercS2024Basic2RichmondMunachiMbachu.html",
       "32wj6": "ercS2024Basic2NachikaobimdiGoodluckIkeme.html",
       "jh75p":"ercS2024Basic2LucianaEnehDennis.html",
       "x3x6p":"ercS2024Basic2ChisomMiracleNwafor.html",
       "d582y":"ercS2024Basic2DaijonOnuchukwuNnaji.html",
       


       "7nu27":"ercS2024Basic3OluwatemiladeJasonAlimi.html",
       "fwd76":"ercS2024Basic3AdaezeVanessaNwaiwu.html",
       "bnh3z":"ercS2024Basic3JoannaJeremiah.html",
       "z92am":"ercS2024Basic3ChisomVeraEkweanua.html",
       "454ry":"ercS2024Basic3KalebChukwusheriBuzugbe.html",
       "6h6du":"ercS2024Basic3AmandaOlajumokeYashim.html",
       "7xcbr":"ercS2024Basic3OgochukwuFranclinyEzekwuaku.html",
       "cg4fm":"ercS2024Basic3MercyNifemiOluwafemi.html",
       "9pz5r":"ercS2024Basic3EjuwachamJosephElom.html",
       "p4n2v":"ercS2024Basic3ChristalynChinwenduOnyekwere.html",
       "4yu4f":"ercS2024Basic3ChukwunonsoEmmanuellaOkoye.html",
       "919rp":"ercS2024Basic3ChinerchermStephanieChukwunete.html",
       "v29f6":"ercS2024Basic3OluwafeyisayoEnochOnawola.html",
       "7hy5s": "ercS2024Basic3IbrahimBiodunKazeem.html",
       "2efyq":"ercS2024Basic3BlossomChimamandaNwani.html",
       "4p5u4":"ercS2024Basic3ChimemerieLauraBenedict.html",
       "5hpd3":"ercS2024Basic3OmotoyosiNellyOshileye.html",
       "5x4rt":"ercS2024Basic3PeterKolawoleOluwafemi.html",
       "6t3s7":"ercS2024Basic3InioluwaMiracleIgbinlola.html",
       "f89yq":"ercS2024Basic3AminaAhmadMasluh.html",
       "4zk7y":"ercS2024Basic3AudreyChizaramAmako.html",
       "474cd":"ercS2024Basic3MatthewRekpemeIrem.html",
       "f27dr":"ercS2024Basic3ChisomSlyviaOkoli.html",
       "8pz8c":"ercS2024Basic3ChigimdiFavourOnuorha.html",




       "z3y4v":"ercS2024Basic4MunachimsoStevenAlochukwu.html",
       "613z6":"ercS2024Basic4TreasureNmesomaObinna.html",
       "4c7yn": "ercS2024Basic4BlossomNgusululaGrema.html",
       "w9hgx": "ercS2024Basic4AdaobiVivianEzekwuaku.html",
       "hyt3q": "ercS2024Basic4ConfidenceChimdinduUdeaja.html",
       "v483u":"ercS2024Basic4KaylaKamsiAfamefula.html",
       "7f3cs":"ercS2024Basic4UkamakaBlessingEzeiel.html",
       "hv4f9":"ercS2024Basic4MmesomachukwuPricelessDibor.html",
       "c3rfd":"ercS2024Basic4RitaChideraNwani.html",
       "t2p1p":"ercS2024Basic4PraiseOomdonaBernard.html",
       "g4pf2":"ercS2024Basic4ChiziteremDominicBenedict.html",
       "mzetx":"ercS2024Basic4ChiemerieGabriellaOzode.html",
       "c762p":"ercS2024Basic4ChidubemUrellOnyegimma.html",
       "ybg4k":"ercS2024Basic4ChidubemEmmanuelEzechukwugoziri.html",
       "659n7": "ercS2024Basic4EmmanuellaJoshuaSunday.html",
       "z97fd": "ercS2024Basic4ChikamsoDestinyNwafor.html",
       "747wr":"ercS2024Basic4FebechukwuAnnalisaIkeme.html",
       "vu585":"ercS2024Basic4BettinaRachealAdewole.html",  
       "vmv17":"ercS2024Basic4DivineChiziteremChristopher.html", 
       "z3rpd":"ercS2024Basic4ChizaramPraiseGodwin.html  ",
       "59xzp":"ercS2024Basic4ChiwenduGraceOkafor.html",
       "rg5p2":"ercS2024Basic4SamuelChigozieKelechi.html",     
       "rzjp2":"ercS2024Basic4EmmanuellaOveraOghenekohwo.html",
       "g55q2":"ercS2024Basic4MaxwellChisomUwandu.html",
       "mq2tx":"ercS2024Basic4MercyMimiAyuba.html",
      


       "mn7st": "ercS2024Basic5TemiloluwaStephenAyodele.html",
       "n6xda":"ercS2024Basic5ChukwuemekaChristopherOkoye.html",
       "u9773":"ercS2024Basic5OluakachukwuCalebOkeke.html",
       "v1pu1":"ercS2024Basic5OluwaseyiEmmanuelOnawola.html",
       "3dnz9":"ercS2024Basic5ChikamsoFransicaEkweanua.html",
       "3n5vx":"ercS2024Basic5EbohVictoriaAugustine.html",
       "eb6fa":"ercS2024Basic5CrispinaChiomaOnyekwere.html",
       "8uf5t":"ercS2024Basic5DaberechiVitusEzekwuaku.html",
       "6v7ws":"ercS2024Basic5EniolaBridgetDosunmu.html",
       "c28xp":"ercS2024Basic5IzuchukwuAustinEjidike.html",
       "36k8g":"ercS2024Basic5ProsperKingfirstWisdom.html",
       "u54bh":"ercS2024Basic5IfunanyaFavourChukwudi.html",
       "8783f": "ercS2024Basic5SoliatAjokeAbdullahi.html",
       "3wgcq": "ercS2024Basic5FionaIfechukwuAmako.html",
       "89zzy":"ercS2024Basic5MunachisoDavidEquzor.html",
       "vp174":"ercS2024Basic5EmmanuelAdolijeEjeh.html",
      





       "32m1p":"ercS2024Jss1ChiamamadaFaithOnyebuchi.html",
       "u4zf2":"ercS2024Jss1AnnabelAmarachiObieloka.html",
       "m9et7":"ercS2024Jss1JefferyChinonsoAfamefula.html",
       "c722x":"ercS2024Jss1NobleChimerezeUche.html",
       "1bh4k":"ercS2024Jss1PraiseEhineduGodwin.html",
       "9y7dc":"ercS2024Jss1GospelUbiOkoi.html",
       "6az90":"ercS2024Jss1FavourOjonikeEkele.html",
       "ird8u":"ercS2024Jss1MichelleAyanfeOgedengbe.html",
       "n9ght":"ercS2024Jss1ChinazaStephenIkebuaku.html",
       "t5nec":"ercS2024Jss1ChinazaDivineKenneth.html",
       "nzfgc":"ercS2024Jss1TahliaSimiDaniel.html",  
       "6uy3c":"ercS2024Jss1ChidiebeSamuelUgwoeru.html",
       "q6e7k":"ercS2024Jss1BiodunTajideenIbrahim.html",
       "t697k":"ercS2024Jss1AdaezeBenedictaAniagolu.html",
       "t6k7z":"ercS2024Jss1IfedolaHedvaAdesoji.html",
       "p697y":"ercS2024Jss1MaridiyatMurtalaOgohi.html",
       "px95z":"ercS2024Jss1MusaTobilobaIbrahim.html",
       "rx75z":"ercS2024Jss1MunachisoFaithManafa.html",
       "d6p7k":"ercS2024Jss1MeeknessVihkunJoshua.html",
       "t6f3z":"ercS2024Jss1PreciousMunachimEmeana.html",
       "j6hv2":"ercS2024Jss1ChinecheremFavourJohn.html",
       "4ddtz": "ercS2024Jss1MuktarHassanJafaru.html",
       "4pgh9": "ercS2024Jss1IfunanyaJoyChukwunonso.html",
       "85r8c": "ercS2024Jss1JenniferDarasimiHassan.html",
       "1g8z2":"ercS2024Jss1OluwanifemiJoyOluwafemi.html",
       "exrh5":"ercS2024Jss1AkachukwuMosesChukwuebuka.html",
       "wxh35":"ercS2024Jss1UchechiPerpetualMicheal.html",
       "61x3w":"ercS2024Jss1EmmanuellaChiemerigoMachu.html",
       "w82ez":"ercS2024Jss1AfolabiDamilolaNdifreke.html",
       "59fwp": "ercS2024Jss1ChikamsoNancyIkeme.html",
       "58rpv":"ercS2024Jss1AmandaChizaramOnuoha.html",
       "agdy4":"ercS2024Jss1OkwuchukwuGenesisUzoma.html",
       "kx44d":"ercS2024Jss1DiamondOkonAsuquo.html",
       "u1m24":"ercS2024Jss1TestimonyMunachisoChukwuka.html",
      
       "ypt66":"ercS2024Jss1EbubeOnyedike.html",


      


       "n8t9k":"ercS2024Jss2SomtochukwuPropserBenedict.html",
       "3y2zc":"ercS2024Jss2ChukwuruikeMichealAlochukwu.html",
       "66u3h":"ercS2024Jss2PropserChisomNwani.html",
       "8vr8f": "ercS2024Jss2ChiomaPricousNwafor.html",
       "48yzb":"ercS2024Jss2AkachukwuPreciousEzeamaku.html",
       

       "3n6z4": "ercS2024Jss3FavourOrauaogeneMaduabuchukwu.html",


       








       
       "9g8p2":"ercS2024Basic5FavourIfunanyaChuwudi.html",
       "e9gh5":"ercS2024Jss1ChimamadaBethelOnuorha.html",
       "wtg45":"ercS2024Kg1EkenePrinceOkafor.html",
       "61txw":"ercS2024Basic2HappinessChinenyeOkafor.html",
       "nx2ez":"ercS2024Nur2FavourChizobaOkafor.html",
       


       "5ytz7":"ercS2024Basic5ChidinmaFavourChukwumere.html",
       "8xc8c":"ercS2024Basic1KosisochukwuEmmanuelNnabuife.html",
      
       "e9rx5":"ercS2024Kg2MmesomaJacintaNnabuife.html",
       "wyw45":"ercS2024Basic5EmmanuelChimezieKelechi.html",
       "6ps5w":"ercS2024Basic2ChikamsoGodstimeEze.html",    
       "nph5z":"ercS2024Jss1MichealOnorudeImereti.html",
       "y7u2t":"ercS2024Basic2OnyedikaChukwuEmmanuelDibor.html",


         



          };

    document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault();

      // Get password
      var passwordInput = document.getElementById('password').value;

      // Check credentials
      if (passwords[passwordInput]) {
        window.location.href = passwords[passwordInput];
        alert(" Your N1,100 Expires\ 60 Days From\n 2025 - July - 18\n That Is\n 2025 - Sept - 16");
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
  