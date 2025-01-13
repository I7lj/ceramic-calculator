function calculate() {
    // جلب القيم المدخلة من المستخدم وتحويلها إلى أرقام باستخدام parseFloat
    const buttonLength = parseFloat(document.getElementById("buttonLength").value); // طول الزر بالسنتيمتر
    const areaLength = parseFloat(document.getElementById("areaLength").value); // طول المساحة بالمتر
    const areaWidth = parseFloat(document.getElementById("areaWidth").value);   // عرض المساحة بالمتر
    const tileLength = parseFloat(document.getElementById("tileLength").value); // طول السيراميك بالسنتيمتر
    const tileWidth = parseFloat(document.getElementById("tileWidth").value);   // عرض السيراميك بالسنتيمتر

    // التحقق من إدخال القيم والتأكد من أنها أرقام موجبة
    if (!isNaN(buttonLength) && !isNaN(areaLength) && !isNaN(areaWidth) && !isNaN(tileLength) && !isNaN(tileWidth)) {
        if (buttonLength <= 0 || areaLength <= 0 || areaWidth <= 0 || tileLength <= 0 || tileWidth <= 0) {
            document.getElementById("result").innerText = "من فضلك، أدخل قيم صحيحة أكبر من 0.";
            return;
        }

        // تحويل أبعاد المساحة من متر إلى سنتيمتر
        const areaLengthCm = areaLength * 100; // تحويل طول المساحة إلى سنتيمتر
        const areaWidthCm = areaWidth * 100;   // تحويل عرض المساحة إلى سنتيمتر

        // حساب المحيط (الذي هو مجموع أطوال الحوائط)
        const totalPerimeter = 2 * (areaLengthCm + areaWidthCm); // محيط المساحة (مجموع الأطوال)

        // حساب عدد الأزرار المطلوب
        const numberOfButtons = totalPerimeter / buttonLength; // الحساب الفعلي
        const integerPartButtons = Math.floor(numberOfButtons); // الجزء الصحيح للأزرار
        const decimalPartButtons = (numberOfButtons - integerPartButtons).toFixed(2).substring(2); // الجزء العشري للأزرار

        // حساب عدد السيراميك
        const tileArea = (tileLength / 100) * (tileWidth / 100); // حساب مساحة السيراميك بالمتر المربع
        const totalArea = areaLength * areaWidth; // حساب مساحة الأرضية بالمتر المربع
        const numberOfTiles = totalArea / tileArea; // حساب عدد السيراميك المطلوب
        const integerPartTiles = Math.floor(numberOfTiles); // الجزء الصحيح للسيراميك
        const decimalPartTiles = (numberOfTiles - integerPartTiles).toFixed(2).substring(2); // الجزء العشري للسيراميك

        // عرض النتيجة
        document.getElementById("result").innerHTML = `
            عدد الأزرار المطلوب: <span class="result-integer">${integerPartButtons}</span>.<span class="result-decimal">${decimalPartButtons}</span> زر <br>
            عدد السيراميك المطلوب: <span class="result-integer">${integerPartTiles}</span>.<span class="result-decimal">${decimalPartTiles}</span> سيراميك`;
    } else {
        document.getElementById("result").innerText = "من فضلك، تأكد من إدخال جميع البيانات بشكل صحيح.";
    }
}

