document.addEventListener("DOMContentLoaded", () => {
    const input_search = document.querySelector(".search__input");
    const btn_search = document.querySelector(".navbar__button");

    btn_search.addEventListener("click", () => {
        let visible = document.querySelector(".visible");

        if (visible) {
            input_search.style.width = "0";
            input_search.style.padding = "0";
            input_search.classList.remove("visible");
        } else{
            input_search.style.width = "15rem";
            input_search.style.padding = "0.5rem 0 0.5rem 0.5rem";
            input_search.classList.add("visible");
        }
    });


    const marquee = (selector, speed) => {
        const container = document.querySelector(selector);
        const list = container.children[0];

        let i = 0;

        setInterval(() => {
            list.style.marginLeft = `-${i}px`;

            if (i > list.clientWidth) {
                i = 0;
            };
            i = i + speed;
        }, 0);
    };
    marquee(".marquee__container", 0.2);


    const mobile_btn = document.querySelector(".navbar__mobile-btn");
    const mobile_menu = document.querySelector(".navbar__mobile-list");

    mobile_btn.addEventListener("click", () => {
        const menu_open = document.querySelector(".menu_open");

        if (!menu_open) {
            mobile_menu.style.display = "block";
            mobile_menu.classList.add("menu_open");
        } else {
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open");
        };
    });

    const submenu = (boton, submenu, className) => {
        boton.addEventListener("click", () => {
            const drop = document.querySelector("."+className);
            
            if (!drop) {
                submenu.style.display = "block";
                submenu.classList.add(className);
            } else {
                submenu.style.display = "none";
                submenu.classList.remove(className);
            }
        });
    };

    const dropdown1_btn = document.querySelector("#icon1");
    const dropdown1_submenu = document.querySelector("#submenu1");

    const dropdown2_btn = document.querySelector("#icon2");
    const dropdown2_submenu = document.querySelector("#submenu2");

    submenu(dropdown1_btn,dropdown1_submenu, "drop1");
    submenu(dropdown2_btn,dropdown2_submenu, "drop2");

    window.addEventListener("resize", () => {
        let win = parseFloat(document.body.clientWidth);

        if(win > 1024) {
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open")
        }
    });
});