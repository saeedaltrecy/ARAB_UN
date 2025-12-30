// ============================================
// Professional Sidebar Navigation System
// Arab University - College Medicine Pages
// ============================================
//
// Features:
// ✓ Mobile-responsive sidebar toggle
// ✓ Smooth slide-in/out animations
// ✓ Backdrop overlay with blur effect
// ✓ Accordion menu functionality
// ✓ Active link highlighting
// ✓ ESC key to close
// ✓ Click outside to close
// ✓ Auto-close on navigation
// ✓ Window resize handling
// ✓ Smooth scrolling inside sidebar
// ✓ Touch-friendly interactions
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // Variables & DOM Elements
  // ============================================
  const sidebar = document.querySelector(".med-sidebar");
  const mobileToggle = document.getElementById("med-sidebar-mobile-toggle");
  const sidebarOverlay = document.querySelector(".med-sidebar-overlay");
  const sidebarToggles = document.querySelectorAll(".med-sidebar-toggle");
  const body = document.body;

  // ============================================
  // Mobile Sidebar Toggle Functionality
  // ============================================

  /**
   * Opens the sidebar on mobile devices
   */
  function openSidebar() {
    if (sidebar) {
      sidebar.classList.add("is-open");
      body.style.overflow = "hidden"; // Prevent background scrolling

      // Smooth animation with slight delay for better UX
      setTimeout(() => {
        if (sidebarOverlay) {
          sidebarOverlay.style.pointerEvents = "auto";
        }
      }, 50);
    }
  }

  /**
   * Closes the sidebar on mobile devices
   */
  function closeSidebar() {
    if (sidebar) {
      sidebar.classList.remove("is-open");
      body.style.overflow = ""; // Restore scrolling

      if (sidebarOverlay) {
        sidebarOverlay.style.pointerEvents = "none";
      }
    }
  }

  /**
   * Toggles sidebar open/close state
   */
  function toggleSidebar() {
    if (sidebar && sidebar.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // Mobile Toggle Button Event
  if (mobileToggle) {
    mobileToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    });
  }

  // Overlay Click - Close Sidebar
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", function (e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  // Close sidebar when clicking on a link (mobile only)
  const sidebarLinks = document.querySelectorAll(".med-sidebar-link:not(.med-sidebar-toggle), .med-sidebar-sublink");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Only close on mobile (when sidebar has is-open class)
      if (sidebar && sidebar.classList.contains("is-open")) {
        setTimeout(() => {
          closeSidebar();
        }, 200); // Small delay for better UX
      }
    });
  });

  // Close sidebar on ESC key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });

  // Handle window resize - close sidebar if resizing to desktop
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 1024 && sidebar && sidebar.classList.contains("is-open")) {
        closeSidebar();
      }
    }, 250);
  });

  // ============================================
  // Accordion Menu Functionality
  // ============================================

  sidebarToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parentItem = this.closest(".med-sidebar-item--parent");
      const isActive = parentItem.classList.contains("active");

      // Close all other menus (Accordion behavior)
      document.querySelectorAll(".med-sidebar-item--parent").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
        }
      });

      // Toggle current menu
      if (isActive) {
        parentItem.classList.remove("active");
      } else {
        parentItem.classList.add("active");
      }
    });
  });

  // ============================================
  // Active Link Highlighting
  // ============================================

  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "college-medicine.html";

  // Update active link based on current page
  document.querySelectorAll(".med-sidebar-link, .med-sidebar-sublink").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && (currentPage === href || currentPath.includes(href))) {
      link.classList.add("active");

      // Auto-expand parent menu if link is active
      const parentItem = link.closest(".med-sidebar-item--parent");
      if (parentItem) {
        parentItem.classList.add("active");
      }
    }
  });

  // ============================================
  // Smooth Scroll Enhancement
  // ============================================

  // Prevent sidebar content from closing when scrolling inside it
  const sidebarContent = document.querySelector(".med-sidebar-content");
  if (sidebarContent) {
    sidebarContent.addEventListener("touchmove", function (e) {
      e.stopPropagation();
    }, { passive: true });
  }
});

