const ctx = document.getElementById('ipdReferInChart').getContext('2d');
const data = {
    labels: ['อายุรกรรม','ศัลยกรรม','ศัลยกรรมกระดูกและข้อ','จักษุ','แม่และเด็ก','สูติ-นรีเวช','จิตเวช'],
    datasets: [
        { label: '2565', data: [25,20,18,10,12,8,5], backgroundColor: 'rgba(75,192,192,0.7)' },
        { label: '2566', data: [30,22,20,12,15,10,6], backgroundColor: 'rgba(54,162,235,0.7)' },
        { label: '2567', data: [35,25,22,15,18,12,8], backgroundColor: 'rgba(255,159,64,0.7)' }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: { display:true, text:'IPD Refer In แยกแผนก' },
            tooltip: { mode:'index', intersect:false },
            legend: { position:'top' }
        },
        scales: {
            x: { stacked:false },
            y: { stacked:false, beginAtZero:true }
        },
        layout: {
            padding: 10
        },
        // ตั้งค่าพื้นหลังของกราฟ
        backgroundColor: 'white' 
    }
};

// เพิ่มพื้นหลังสีขาวให้ canvas
ctx.canvas.style.backgroundColor = 'white';

new Chart(ctx, config);
