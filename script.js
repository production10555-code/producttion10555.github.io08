// ใช้ URL เดียวที่คุณมั่นใจว่าถูกต้องที่สุด
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxUVOOUxu7-2uq5njmf9xKDKyNx18KNz1QPGf32Ye3txEktBbiRjX2kyDiWHhBSm0FdAA/exec";

async function sendDataToSheets(qrData, operatorName, batchId) {
  const payload = {
    action: "scan",
    qrData: qrData,
    operatorName: operatorName,
    batchId: batchId
  };

  try {
    // ส่งข้อมูลแบบ POST
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: 'no-cors', // สำคัญ: ใช้โหมดนี้เพื่อให้ข้ามปัญหา Cross-Origin
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload)
    });
    alert("ส่งข้อมูลไปที่ Google Sheets เรียบร้อยแล้ว!");
  } catch (error) {
    console.error("Error:", error);
    alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
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
        return;
    }
    
    sendDataToSheets(qr, name, batch);
});
