const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Web-Designer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Video-Editor";
            }, 8000); 
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 12000);
            setTimeout(() => {
                text.textContent = "Invester";
            }, 16000);
            //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 20000);