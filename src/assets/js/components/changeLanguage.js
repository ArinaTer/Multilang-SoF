import i18next from "i18next";
import Backend from "i18next-http-backend";

export async function changeLanguage() {
    await i18next
        .use(Backend)
        .init({
            lng: "en",
            fallbackLng: "en",
            backend: {
                loadPath: "locales/{{lng}}.json",
            },
        });

    updateContent();

    function updateContent() {
        document.documentElement.lang = i18next.language;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const translation = i18next.t(key);

            if (el.dataset.i18nHtml !== undefined) {
                el.innerHTML = translation;
            } else {
                el.innerText = translation;
            }
        });
    }

    document.getElementById("language-switcher")?.addEventListener("change", (e) => {
        const newLang = e.target.value;
        i18next.changeLanguage(newLang).then(updateContent);
    });
}
