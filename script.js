document.addEventListener("DOMContentLoaded", function() {

    // === CONFIG (from React code) ===
    const NAME = "Alex Bunardzic";
    const BRAND_TITLE = "AI & Refactoring Strategist";
    const SITE_URL = "https://alexbunardzic.github.io";
    const EMAIL = "alex@bunardzic.dev";
    const LOCATION = "Vancouver, Canada · Working globally";

    // --- QR Code Generation ---
    try {
        const qr = qrcode(0, 'L');
        qr.addData(SITE_URL);
        qr.make();
        document.getElementById('qrcode').innerHTML = qr.createImgTag(4, 16); // (cellSize, margin)
    } catch (e) {
        console.error("Failed to generate QR Code:", e);
        document.getElementById('qrcode').innerHTML = "Could not generate QR code.";
    }


    // --- vCard Generation ---
    const vcardBtn = document.getElementById('vcard-btn');
    if (vcardBtn) {
        const vcardLines = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `N:Bunardzic;Alex;;;`,
            `FN:${NAME}`,
            `TITLE:${BRAND_TITLE}`,
            `ORG:Independent Consultant`,
            `EMAIL;TYPE=INTERNET:${EMAIL}`,
            `URL:${SITE_URL}`,
            `ADR;TYPE=WORK:;;${LOCATION.replace(/ · /g, ', ')};;;;`,
            "END:VCARD",
        ].join("\n");

        const blob = new Blob([vcardLines], { type: "text/vcard" });
        const href = URL.createObjectURL(blob);

        vcardBtn.setAttribute('href', href);
        vcardBtn.setAttribute('download', 'Alex_Bunardzic.vcf');
    }

    // --- Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});