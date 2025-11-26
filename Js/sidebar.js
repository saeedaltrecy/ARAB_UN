// Sidebar Navigation Toggle (College Medicine Page)
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggles = document.querySelectorAll(".med-sidebar-toggle");
  
  sidebarToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const parentItem = this.closest(".med-sidebar-item--parent");
      const isActive = parentItem.classList.contains("active");
      
      // إغلاق جميع القوائم الأخرى
      document.querySelectorAll(".med-sidebar-item--parent").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
        }
      });
      
      // تبديل القائمة الحالية
      if (isActive) {
        parentItem.classList.remove("active");
      } else {
        parentItem.classList.add("active");
      }
    });
  });

  // تحديد الرابط النشط بناءً على الصفحة الحالية
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "college-medicine.html";
  
  // تحديث الرابط النشط
  document.querySelectorAll(".med-sidebar-link, .med-sidebar-sublink").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && (currentPage === href || currentPath.includes(href))) {
      link.classList.add("active");
      // فتح القائمة الفرعية إذا كان الرابط نشط
      const parentItem = link.closest(".med-sidebar-item--parent");
      if (parentItem) {
        parentItem.classList.add("active");
      }
    }
  });


  // Mobile Sidebar Toggle Logic
  const mobileSidebarToggle = document.getElementById("med-sidebar-mobile-toggle");
  const sidebar = document.querySelector(".med-sidebar");
  const sidebarOverlay = document.querySelector(".med-sidebar-overlay");

  if (mobileSidebarToggle && sidebar) {
    mobileSidebarToggle.addEventListener("click", function() {
      sidebar.classList.toggle("is-open");
    });
  }

  if (sidebarOverlay && sidebar) {
    sidebarOverlay.addEventListener("click", function() {
      sidebar.classList.remove("is-open");
    });
  }
});

