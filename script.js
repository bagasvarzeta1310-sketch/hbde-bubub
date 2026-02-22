function nextStep(step) {
    if(step === 1) {
        document.getElementById('main-window').classList.add('hidden');
        document.getElementById('menu-window').classList.remove('hidden');
    }
}

function moveBtn() {
    const btn = document.getElementById('ignore-btn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function showContent(type) {
    const win = document.getElementById('content-window');
    const body = document.getElementById('content-body');
    const title = document.getElementById('content-title');
    win.classList.remove('hidden');

    if(type === 'gallery') {
        title.innerText = "Naysila's Gallery";
        let images = "";
        for(let i=1; i<=10; i++) {
            images += `<img src="assets/img${i}.jpg" alt="Foto ${i}">`;
        }
        body.innerHTML = `<div class="gallery-grid">${images}</div>`;
    } 
    else if(type === 'letter') {
        title.innerText = "A Special Message";
        body.innerHTML = `
            <div class="letter-text">
                <h3>Teruntuk perempuanku yang paling jelita...</h3>
                <p>Roro Naysila Putri Afif Syam,</p>
                <p>Tepat di hari ini, waktu seolah berhenti sejenak untuk mengagumi usiamu yang kini menginjak angka 17...</p>
                <p>... (Paste ucapan lengkapmu di sini) ...</p>
                <p><b>Selamat ulang tahun yang ke-17, cintaku.</b></p>
            </div>`;
    }
    else if(type === 'video') {
        title.innerText = "Our Moments";
        body.innerHTML = `
            <video width="100%" controls>
                <source src="assets/video1.mp4" type="video/mp4">
                Browser kamu tidak support video.
            </video>`;
    }
}

function closeContent() {
    document.getElementById('content-window').classList.add('hidden');
}
