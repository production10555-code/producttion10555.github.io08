const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwJHv0U5VM3OaeUUGG3KE7nvDAcOAwAoNiYpOQjDZBSH5Nb4G7gmFmyQR1XOoga9tuE5g/exec" 

async function sendDataToSheets(qrData, operatorName, batchId) {
  const payload = {
    action: "scan",
    qrData: qrData,
    operatorName: operatorName,
    batchId: batchId
  };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      // สำหรับ Google Apps Script เราใช้ 'no-cors' เพื่อหลีกเลี่ยง pre-flight check
      // แต่ถ้าอยากรับค่ากลับมา (เช่น จำนวนที่สแกนไปแล้ว) 
      // อาจต้องใช้เทคนิค JSONP หรือ Google Apps Script ทำหน้าที่ส่งข้อมูลกลับแบบตรงๆ
      mode: 'no-cors', 
      headers: { "Content-Type": "text/plain" }, // ส่งเป็น text/plain แทนเพื่อให้ผ่าน no-cors
      body: JSON.stringify(payload)
    });
    
    alert("ส่งข้อมูลไปที่ Google Sheets เรียบร้อยแล้ว!");
  } catch (error) {
    console.error("Error:", error);
    alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
  }
}
// 1. https://script.google.com/macros/s/AKfycbxg-iS1hUDqt0USo44_HwOK1ZAWZtuYVje6nZymjDICnr6mCeeauXHadeo83kABr2pxMw/exec
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxg-iS1hUDqt0USo44_HwOK1ZAWZtuYVje6nZymjDICnr6mCeeauXHadeo83kABr2pxMw/exec";

// 2. ฟังก์ชันส่งข้อมูล
async function sendDataToSheets(qrData, operatorName, batchId) {
  const payload = {
    action: "scan",
    qrData: qrData,
    operatorName: operatorName,
    batchId: batchId
  };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      mode: 'no-cors',
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload)
    });
    alert("ส่งข้อมูลไปที่ Google Sheets เรียบร้อยแล้ว!");
  } catch (error) {
    console.error("Error:", error);
    alert("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
  }
}

// 3. ส่วนรับคำสั่งคลิก (วางต่อท้ายไปเลย)
document.getElementById("btn-submit").addEventListener("click", () => {
    const qr = document.getElementById("qr-input").value; 
    const name = document.getElementById("name-input").value;
    const batch = document.getElementById("batch-input").value;
    
    sendDataToSheets(qr, name, batch);
});
