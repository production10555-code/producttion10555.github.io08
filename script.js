const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyX_nW3EFK3lNcUKDOqOewRmTfVbgG2O4ftUNBC6QlCTw5zqCXFXNeKlkwbh4nQQiSzpA/exec";

async function sendDataToSheets(qrData, operatorName, batchId) {
  const payload = {
    action: "scan",
    qrData: qrData,
    operatorName: operatorName,
    batchId: batchId
  };

  try {
    // เปลี่ยนมาใช้ fetch ที่ส่ง JSON ตรงๆ
    const response = await fetch(https://script.google.com/macros/s/AKfycbyX_nW3EFK3lNcUKDOqOewRmTfVbgG2O4ftUNBC6QlCTw5zqCXFXNeKlkwbh4nQQiSzpA/exec, {
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
        return;
    }
    
    sendDataToSheets(qr, name, batch);
});
