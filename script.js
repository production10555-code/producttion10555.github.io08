document.getElementById("btn-submit").addEventListener("click", () => {
    const qr = document.getElementById("qr-input").value;
    const name = document.getElementById("name-input").value;
    const batch = document.getElementById("batch-input").value;

    // ตรวจสอบข้อมูลก่อนส่ง
    if (!qr || !name || !batch) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return; // จบการทำงาน ไม่ต้องทำอะไรต่อ
    }

    // เรียกฟังก์ชันส่งข้อมูล
    sendDataToSheets(qr, name, batch);
});

async function sendDataToSheets(qrData, operatorName, batchId) {
    const payload = {
        action: "scan",
        qrData: qrData,
        operatorName: operatorName,
        batchId: batchId
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbz9iwkEiTlnfZlvUfm0bEasLnOXEDvdAOVlQBuZAtoUlIb360pLt8ArMSkuKVE-vAmKdw/exec", {
            method: "POST",
            mode: "no-cors", // หากต้องการทดสอบ ให้ลองเปลี่ยนเป็น "cors" ถ้าฝั่ง Google Script ตั้งค่าอนุญาตไว้
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        alert("ส่งข้อมูลเรียบร้อยแล้ว");
    } catch (error) {
        console.error("Error:", error);
        alert("เกิดข้อผิดพลาด: " + error.message);
    }
}
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz9iwkEiTlnfZlvUfm0bEasLnOXEDvdAOVlQBuZAtoUlIb360pLt8ArMSkuKVE-vAmKdw/exec";

async function sendDataToSheets(qrData, operatorName, batchId) {
  const payload = {
    action: "scan",
    qrData: qrData,
    operatorName: operatorName,
    batchId: batchId
  };

  try {
    // เปลี่ยนมาใช้ fetch ที่ส่ง JSON ตรงๆ
const response = await fetch("https://script.google.com/macros/s/AKfycbz9iwkEiTlnfZlvUfm0bEasLnOXEDvdAOVlQBuZAtoUlIb360pLt8ArMSkuKVE-vAmKdw/exec", {
      method: "POST",
      mode: "no-cors", // ใช้ no-cors ปลอดภัยที่สุดสำหรับ Google Apps Script
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    // เนื่องจากเป็น no-cors จะอ่าน response ไม่ได้ แต่ถือว่าส่งผ่าน
    alert("บันทึกข้อมูลเรียบร้อยแล้ว!"); 
    
  } catch (error) {
    console.error("Error:", error);
    alert("เกิดข้อผิดพลาด: " + error.message);
  }
}
// ผูกเหตุการณ์กับปุ่ม
document.getElementById("btn-submit").addEventListener("click", () => {
    const qr = document.getElementById("qr-input").value; 
    const name = document.getElementById("name-input").value;
    const batch = document.getElementById("batch-input").value;
    
    // ตรวจสอบเบื้องต้นว่ามีข้อมูลครบไหม
    if(!qr || !name || !batch) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      document.getElementById("btn-submit").addEventListener("click", () => {
    const qr = document.getElementById("qr-input").value; 
    const name = document.getElementById("name-input").value;
    const batch = document.getElementById("batch-input").value;
    
    // ใส่ log ตรงนี้เพื่อดูว่าได้ค่าไหม
    console.log("ค่าที่อ่านได้:", { qr, name, batch });
    
    if(!qr || !name || !batch) {
        alert("ข้อมูลไม่ครบ: สแกน QR หรือยัง?");
        return;
    }
    
    sendDataToSheets(qr, name, batch);
});
        return;
    }
    
    sendDataToSheets(qr, name, batch);
});
