document.querySelector(".wrapper").addEventListener("scroll", () => {
    let section = document.querySelector("section");
    let modules = section.children;

    for (let i = 1; i < modules.length; i++) {
        const module = modules[i];
        
        const windowHeight = window.innerHeight;
        const topPos = module.getBoundingClientRect().top;
        const topPoint = 150;

        for (let j = 0; j < module.children.length; j++) {
            const child = module.children[j];
            let className = "active1";
            
            if (j % 2 === 0) {
                className = "active2";
            }

            if (topPos < windowHeight - topPoint) {
                child.classList.add(className);
            } else {
                child.classList.remove(className);
            }
        }
    }
});
