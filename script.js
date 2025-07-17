$(document).ready(function(){
    $('#laporanForm').on('submit', function(e){
        e.preventDefault();
        
       function formatText(text){
                    return text.split('\n').map(line => `-${line}`).join('\n        ');
       }
       
        // Get values from form fields
        const shift = $('#shift').val();
        const dateInput = $('#date').val();  
        
        // Convert date string to Date object and format it
        const date = new Date(dateInput);
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        
        const currentWork = formatText($('#currentWork').val()) ;
        const nextWork = formatText($('#nextWork').val());
        const kendala = formatText($('#kendala').val());

        const laporanDataWA= `
        
Assalamu'alaikum, selamat ${shift} kak

Laporan ${shift} PKL
Nama : Muhammad Alffad Zhuherli
Jurusan : RPL
Sekolah : SMK BUKIT ASAM 
Tanggal : ${formattedDate}
Judul : Proyek Landing Pages UMKM - 21697

    Pekerjaan saat ini:
        ${currentWork}
    
    Pekerjaan selanjutnya:
        ${nextWork}
    
    Kendala:
        ${kendala}              
                            

Terima kasih kak 🙏😊
        `;

        // Modified output to include copy button
        $('#hasil').html(`
            <div class="position-relative bg-light p-3 rounded">
                <pre id="laporanText">${laporanDataWA}</pre>
                <button class="btn btn-primary position-absolute top-0 end-0 m-2" id="copyBtn">
                    <i class="bi bi-clipboard"></i> Copy
                </button>
            </div>
        `);

        // Add click handler for copy button
        $('#copyBtn').on('click', function() {
            const textToCopy = $('#laporanText').text();
            navigator.clipboard.writeText(textToCopy).then(function() {
                // Change button text temporarily to show success
                const $btn = $('#copyBtn');
                $btn.html('<i class="bi bi-clipboard-check"></i> Copied!');
                setTimeout(() => {
                    $btn.html('<i class="bi bi-clipboard"></i> Copy');
                }, 2000);
            });
        });
    });
});