// // تهيئة LenisJS - إعداد احترافي للأداء العالي
// const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
// let isMobileNavOpen = false;

// const lenis =
//   typeof Lenis !== "undefined"
//     ? new Lenis({
//         duration: prefersReducedMotion.matches ? 0.5 : 1.2,
//         easing: (t) => 1 - Math.pow(1 - t, 4),
//     smoothWheel: true,
//         smoothTouch: true,
//         touchInertiaMultiplier: 12,
//         lerp: 0.08,
//         wheelMultiplier: 1.15,
//         gestureOrientation: "vertical",
//         orientation: "vertical",
//         syncTouch: true,
//         syncTouchLerp: 0.06,
//         touchMultiplier: 1.15,
//     infinite: false,
//         autoResize: true,
//         normalizeWheel: true,
//         domTarget: "html",
//       })
//     : undefined;

// const runLenisRAF = (time) => {
//   if (lenis) {
//     lenis.raf(time);
//   }
//   requestAnimationFrame(runLenisRAF);
// };

// requestAnimationFrame(runLenisRAF);

// const resumeLenis = () => {
//   if (lenis && !isMobileNavOpen) {
//     lenis.start();
//   }
// };

// const pauseLenis = () => {
//   if (lenis) {
//     lenis.stop();
//   }
// };

// if (lenis) {
//   resumeLenis();

//   let pointerVelocity = 0;
//   let pointerY = window.innerHeight / 2;

//   window.addEventListener(
//     "mousemove",
//     (event) => {
//       const deltaY = event.clientY - pointerY;
//       pointerVelocity = deltaY * 0.0015;
//       pointerY = event.clientY;

//       if (!isMobileNavOpen) {
//         lenis.scrollTo(lenis.scroll + pointerVelocity, {
//           immediate: false,
//           lock: false,
//         });
//       }
//     },
//     { passive: true }
//   );

//   document.addEventListener("visibilitychange", () => {
//     if (document.hidden) {
//       pauseLenis();
//     } else {
//       resumeLenis();
//     }
//   });

//   prefersReducedMotion.addEventListener("change", () => {
//     if (prefersReducedMotion.matches) {
//       pauseLenis();
//     } else {
//       resumeLenis();
//     }
//   });

//   window.addEventListener("load", resumeLenis);

//   ["scroll", "touchstart", "wheel", "keydown"].forEach((evt) => {
//     window.addEventListener(
//       evt,
//       () => {
//         resumeLenis();
//       },
//       { passive: true }
//     );
//   });
// }

// تهيئة GSAP عند تحميل الصفحة

document.addEventListener("DOMContentLoaded", function () {
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor =
    rootStyles.getPropertyValue("--primary").trim() || "#009e91";
  const primarySoft =
    rootStyles.getPropertyValue("--primary-soft").trim() ||
    "rgba(0, 158, 145, 0.08)";
  const inkColor = rootStyles.getPropertyValue("--ink").trim() || "#fd823b";
  // أنيميشن لشعار الموقع - مع فحص وجود العنصر
  const logoLink = document.querySelector(".logo-link");
  if (logoLink) {
    gsap.from(".logo-link", {
      duration: 1,
      x: -50,
      opacity: 0,

      ease: "power3.out",
    });
  }

  // أنيميشن لعناصر القائمة بدون إخفائها - مع فحص وجود العناصر
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length > 0) {
    gsap.set(".nav-link", { opacity: 1 });

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        ".nav-link",
        { y: -16, scale: 0.96, opacity: 1, filter: "blur(6px)" },
        {
          duration: 0.1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.08,
          delay: 0.1,
        }
      )
      .to(
        ".nav-link",
        {
          duration: 0.32,
          boxShadow: "0 18px 36px -20px rgba(0, 158, 145, 0.55)",
          ease: "back.out(1.6)",
        },
        "-=0.5"
      )
      .to(".nav-link", {
        duration: 0.24,
        boxShadow: "0 12px 24px -20px rgba(0, 158, 145, 0.45)",
        ease: "power1.out",
      });
  }

  // أنيميشن للجزء الأيمن من القائمة - مع فحص وجود العنصر
  const navRight = document.querySelector(".nav-right");
  if (navRight) {
    gsap.from(".nav-right", {
      duration: 0.8,
      x: 50,
      opacity: 0,
      delay: 0.5,

      ease: "power3.out",
    });
  }

  // أنيميشن للعنوان الرئيسي - مع فحص وجود العنصر
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    gsap.to(".hero-title", {
      duration: 1.2,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      delay: 0.7,

      ease: "power3.inOut",
    });
  }

  // أنيميشن للبطاقات - مع فحص وجود العناصر
  const cardItems = document.querySelectorAll(".card-item");
  if (cardItems.length > 0) {
    gsap.from(".card-item", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 1,

      ease: "power2.out",
    });
  }

  // أنيميشن للأيقونات داخل البطاقات - مع فحص وجود العناصر
  const cardIcons = document.querySelectorAll(".card-icon");
  if (cardIcons.length > 0) {
    gsap.from(".card-icon", {
      duration: 0.8,
      scale: 0,
      rotation: 180,
      stagger: 0.2,
      delay: 1.2,

      ease: "back.out(1.7)",
    });

  }

  // تأثيرات GSAP للروابط عند الهوفر

  document.querySelectorAll(".link-hover-effect").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        duration: 0.5,
        scale: 1.02,

        ease: "power2.out",
      });

      // تأثير سلس للون
      gsap.to(link, {
        duration: 0.3,

        color: primaryColor,
        ease: "power2.out",
      });
    });


    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        duration: 0.5,
        scale: 1,

        ease: "power2.out",
      });

      // إعادة اللون الأصلي
      gsap.to(link, {
        duration: 0.3,

        color: inkColor,
        ease: "power2.out",
      });
    });
  });

  // تأثيرات hover للبطاقات باستخدام GSAP

  document.querySelectorAll(".card-hover").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,

        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        ease: "power2.out",
      });


      // تأثير للأيقونة داخل البطاقة - مع فحص وجود العنصر
      const icon = card.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1.1,
          rotation: 5,

          ease: "power2.out",
        });

      }
    });


    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,

        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        ease: "power2.out",
      });


      // إعادة الأيقونة إلى حالتها الأصلية - مع فحص وجود العنصر
      const icon = card.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1,
          rotation: 0,

          ease: "power2.out",
        });

      }
    });
  });

  // تأثيرات hover للأزرار

  document.querySelectorAll(".solution-btn, .gradient-bg").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        y: -2,

        ease: "power2.out",
      });
    });


    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        y: 0,

        ease: "power2.out",
      });
    });
  });

  // تأثيرات hover لزر اللغة

  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        y: -2,

        backgroundColor: primaryColor,
        color: "white",

        ease: "power2.out",
      });
    });


    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.3,
        y: 0,

        backgroundColor: primarySoft,
        color: primaryColor,
        ease: "power2.out",
      });
    });

  });

  const isDesktop = () => window.innerWidth >= 1024;

  // تفعيل زر اللغة (محدث ليعمل بالنقر على جميع الشاشات مع تدوير الأيقونة)
  document.querySelectorAll(".language-btn").forEach((btn) => {
    const wrapper = btn.closest(".relative");
    const dropdown = wrapper ? wrapper.querySelector(".dropdown-menu") : null;
    const icon = btn.querySelector(".dropdown-icon") || btn.querySelector(".fa-chevron-down");

    if (!dropdown) return;

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation(); // منع إغلاق القائمة فوراً عند النقر

      const isOpen = dropdown.classList.contains("is-open");

      if (isOpen) {
        // إغلاق القائمة
        gsap.to(dropdown, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            dropdown.classList.remove("is-open");
            dropdown.style.pointerEvents = "none";
          },
        });
        // تدوير الأيقونة للوضع الأصلي
        if (icon) {
          gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
        }
      } else {
        // إغلاق أي قوائم لغة أخرى مفتوحة (اختياري)
        document.querySelectorAll(".language-dropdown.is-open").forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("is-open");
            gsap.to(otherDropdown, { opacity: 0, y: -10, duration: 0.2 });
          }
        });

        // فتح القائمة
        dropdown.classList.add("is-open");
        dropdown.style.pointerEvents = "auto";
        gsap.fromTo(
          dropdown,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
        // تدوير الأيقونة
        if (icon) {
          gsap.to(icon, { rotation: 180, duration: 0.3, ease: "power2.out" });
        }
      }
    });
  });

  // إغلاق قائمة اللغة عند النقر خارجها
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-btn") && !event.target.closest(".language-dropdown")) {
      document.querySelectorAll(".language-dropdown.is-open").forEach((dropdown) => {
        const wrapper = dropdown.closest(".relative");
        const btn = wrapper ? wrapper.querySelector(".language-btn") : null;
        const icon = btn ? (btn.querySelector(".dropdown-icon") || btn.querySelector(".fa-chevron-down")) : null;

        gsap.to(dropdown, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            dropdown.classList.remove("is-open");
            dropdown.style.pointerEvents = "none";
          }
        });

        if (icon) {
          gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined") {
      return;
    }

    const aboutElements = document.querySelectorAll("[data-about-animate]");
    const aboutImage = document.querySelector(".about-hero-image");

    if (aboutElements.length) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );

      aboutElements.forEach((el) => {
        gsap.set(el, { y: 35 });
        observer.observe(el);
      });
    }

    if (aboutImage) {
      gsap.to(aboutImage, {
        yPercent: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  });


  // التحكم في القوائم المنسدلة الرئيسية (دروب داون) على الهواتف
  const navDropdownEntries = [];

  const closeDropdownEntry = (entry, animate = true) => {
    if (!entry.panel.classList.contains("is-open")) return;
    const animation = {
      opacity: 0,
      y: -10,
      duration: animate ? 0.2 : 0,
      ease: "power2.in",
      onComplete: () => {
        entry.panel.classList.remove("is-open");
        entry.panel.style.pointerEvents = "none";
      },
    };
    gsap.to(entry.panel, animation);
    if (entry.icon) {
      gsap.to(entry.icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
    }
    entry.trigger.setAttribute("aria-expanded", "false");
  };

  const openDropdownEntry = (entry) => {
    entry.panel.classList.add("is-open");
    entry.panel.style.pointerEvents = "auto";
    gsap.fromTo(
      entry.panel,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );
    if (entry.icon) {
      gsap.to(entry.icon, { rotation: 180, duration: 0.3, ease: "power2.out" });
    }
    entry.trigger.setAttribute("aria-expanded", "true");
  };

  // حساب موضع السهم بالنسبة للرابط
  const updateArrowPosition = (dropdown) => {
    if (!isDesktop()) return;
    const trigger = dropdown.querySelector("button");
    const panel =
      dropdown.querySelector(".dropdown-panel") ||
      dropdown.querySelector(".dropdown-menu");
    if (!trigger || !panel) return;

    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const panelLeft = panelRect.left;
    const arrowOffset = triggerCenter - panelLeft;

    panel.style.setProperty("--arrow-offset", `${arrowOffset}px`);
  };

  // تعديل موضع القائمة لمنع خروجها عن الإطار - حل احترافي
  const adjustDropdownPosition = (dropdown) => {
    if (!isDesktop()) return;

    const panel = dropdown.querySelector(".dropdown-panel");
    if (!panel) return;

    // إزالة أي تعديلات سابقة
    panel.style.left = "";
    panel.style.right = "";
    panel.style.transform = "";
    panel.style.maxWidth = "";

    // الحصول على أبعاد العناصر
    const trigger = dropdown.querySelector("button");
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportPadding = 20; // مسافة آمنة من الحواف

    // حساب الموضع المثالي (وسط الرابط)
    const idealLeft =
      triggerRect.left + triggerRect.width / 2 - panelRect.width / 2;

    // التحقق من الخروج عن الإطار من اليسار
    if (idealLeft < viewportPadding) {
      panel.style.left = `${viewportPadding}px`;
      panel.style.transform = "translate(0, 0)";
    }
    // التحقق من الخروج عن الإطار من اليمين
    else if (idealLeft + panelRect.width > viewportWidth - viewportPadding) {
      panel.style.right = `${viewportPadding}px`;
      panel.style.left = "auto";
      panel.style.transform = "translate(0, 0)";
    }
    // الموضع المثالي داخل الإطار
    else {
      panel.style.left = "50%";
      panel.style.transform = "translate(-50%, 0)";
    }

    // تحديد max-width بناءً على المساحة المتاحة
    const availableWidth = viewportWidth - viewportPadding * 2;
    const currentMaxWidth =
      parseInt(getComputedStyle(panel).maxWidth) || panelRect.width;
    const finalMaxWidth = Math.min(currentMaxWidth, availableWidth);

    panel.style.maxWidth = `${finalMaxWidth}px`;
  };

  // دالة لإغلاق جميع القوائم المنسدلة
  const closeAllDropdowns = (except = null) => {
    navDropdownEntries.forEach((entry) => {
      if (entry !== except) {
        if (isDesktop()) {
          entry.dropdown.classList.remove("open");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        } else {
          closeDropdownEntry(entry);
        }
      }
    });
  };

  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector("button");
    const panel = dropdown.querySelector(".dropdown-menu");
    const icon = dropdown.querySelector(".dropdown-icon");
    if (!trigger || !panel) return;

    trigger.setAttribute("aria-expanded", "false");
    panel.style.pointerEvents = "none";
    navDropdownEntries.push({ dropdown, trigger, panel, icon });

    // تحديث موضع السهم والقائمة عند فتح القائمة
    if (isDesktop()) {
      dropdown.addEventListener("mouseenter", () => {
        if (dropdown.classList.contains("open")) {
          setTimeout(() => {
            updateArrowPosition(dropdown);
            adjustDropdownPosition(dropdown);
          }, 10);
        }
      });
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const entry = navDropdownEntries.find((item) => item.trigger === trigger);
      if (!entry) return;

      if (isDesktop()) {
        // سطح المكتب: استخدام class "open"
        const isOpen = entry.dropdown.classList.contains("open");
        closeAllDropdowns(entry);

        if (isOpen) {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        } else {
          entry.dropdown.classList.add("open");
          entry.trigger.setAttribute("aria-expanded", "true");
          setTimeout(() => {
            updateArrowPosition(entry.dropdown);
            adjustDropdownPosition(entry.dropdown);
          }, 10);
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 180,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }
      } else {
        // الجوال: استخدام class "is-open"
        const isOpen = entry.panel.classList.contains("is-open");
        closeAllDropdowns(entry);

        if (isOpen) {
          closeDropdownEntry(entry);
        } else {
          openDropdownEntry(entry);
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    // التحقق إذا كان النقر على رابط داخل القائمة المنسدلة
    const clickedOnNavLink = event.target.closest('.nav-sub-link');
    if (clickedOnNavLink) {
      // السماح للرابط بالعمل بشكل طبيعي
      return;
    }

    const clickedInside = navDropdownEntries.some((entry) =>
      entry.dropdown.contains(event.target)
    );
    if (!clickedInside) {
      if (isDesktop()) {
        navDropdownEntries.forEach((entry) => {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      } else {
        navDropdownEntries.forEach((entry) => closeDropdownEntry(entry));
      }
    }
  });

  // إغلاق القوائم عند الضغط على ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (isDesktop()) {
        navDropdownEntries.forEach((entry) => {
          entry.dropdown.classList.remove("open");
          entry.trigger.setAttribute("aria-expanded", "false");
          if (entry.icon) {
            gsap.to(entry.icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      } else {
        navDropdownEntries.forEach((entry) => closeDropdownEntry(entry));
      }
    }
  });

  window.addEventListener("resize", () => {
    if (isDesktop()) {
      navDropdownEntries.forEach((entry) => {
        // تعديل موضع القائمة المفتوحة قبل إغلاقها
        if (entry.dropdown.classList.contains("open")) {
          adjustDropdownPosition(entry.dropdown);
        }
        entry.dropdown.classList.remove("open");
        entry.panel.classList.remove("is-open");
        entry.panel.style.pointerEvents = "";
        entry.panel.style.left = "";
        entry.panel.style.right = "";
        entry.panel.style.transform = "";
        entry.panel.style.maxWidth = "";
        gsap.set(entry.panel, { clearProps: "opacity,y" });
        entry.trigger.setAttribute("aria-expanded", "false");
        if (entry.icon) {
          gsap.to(entry.icon, { rotation: 0, duration: 0.2, overwrite: true });
        }
      });
    } else {
      navDropdownEntries.forEach((entry) => {
        entry.dropdown.classList.remove("open");
        entry.panel.style.pointerEvents = "none";
        entry.panel.classList.remove("is-open");
        entry.panel.style.left = "";
        entry.panel.style.right = "";
        entry.panel.style.transform = "";
        entry.panel.style.maxWidth = "";
        gsap.set(entry.panel, { opacity: 0, y: -10 });
        entry.trigger.setAttribute("aria-expanded", "false");
        if (entry.icon) {
          gsap.to(entry.icon, { rotation: 0, duration: 0.2, overwrite: true });
        }
      });
    }
  });
});

// ============================================
// قائمة الجوال المنبثقة (Mobile Navigation Menu)
// ============================================

const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavOverlay = mobileNavMenu?.querySelector(".mobile-nav-overlay");
const mobileNavContent = mobileNavMenu?.querySelector(".mobile-nav-content");
const mobileNavIcon = document.getElementById("mobile-nav-icon");

// فتح القائمة
if (mobileNavToggle && mobileNavMenu) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNavMenu.classList.remove("hidden");

    // منع تمرير الصفحة وخفض Lenis أثناء عرض قائمة الجوال
    const scrollY = window.scrollY || window.pageYOffset;
    document.body.dataset.scrollY = scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (typeof lenis !== "undefined") {
      lenis.stop();
    }
    isMobileNavOpen = true;

    // أنيميشن GSAP لفتح القائمة
    gsap.fromTo(
      mobileNavOverlay,
      { opacity: 0 },

      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      mobileNavContent,
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );

    // تغيير الأيقونة
    if (mobileNavIcon) {
      gsap.to(mobileNavIcon, {
        rotation: 90,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
}

// إغلاق القائمة
const closeMobileNav = () => {
  if (!mobileNavMenu || mobileNavMenu.classList.contains("hidden")) return;

  // أنيميشن GSAP لإغلاق القائمة
  gsap.to(mobileNavContent, {
    x: 400,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {

      mobileNavMenu.classList.add("hidden");
      document.body.style.position = "";
      const storedScrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = ""; // إعادة التمرير
      document.documentElement.style.overflow = "";
      if (typeof lenis !== "undefined") {
        lenis.start();
      }
      isMobileNavOpen = false;
      if (!isNaN(storedScrollY)) {
        window.scrollTo(0, storedScrollY);
      }
    },
  });

  gsap.to(mobileNavOverlay, {
    opacity: 0,

    duration: 0.3,
  });

  // إعادة الأيقونة
  if (mobileNavIcon) {
    gsap.to(mobileNavIcon, {
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }
};

if (mobileNavClose) {
  mobileNavClose.addEventListener("click", closeMobileNav);
}

// إغلاق القائمة عند النقر على الـ overlay
if (mobileNavOverlay) {
  mobileNavOverlay.addEventListener("click", closeMobileNav);
}

// إغلاق القائمة عند الضغط على ESC
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    mobileNavMenu &&
    !mobileNavMenu.classList.contains("hidden")
  ) {
    closeMobileNav();
  }
});

// التحكم في Accordion للقائمة الجوال
document.querySelectorAll(".mobile-nav-accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const accordion = toggle.closest(".mobile-nav-accordion");
    const content = accordion?.querySelector(".mobile-nav-accordion-content");
    const icon = toggle.querySelector(".mobile-nav-accordion-icon");

    if (!content) return;

    const isOpen = !content.classList.contains("hidden");

    if (isOpen) {
      // إغلاق
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {

          content.classList.add("hidden");
        },
      });
      if (icon) {
        gsap.to(icon, { rotation: 0, duration: 0.3 });
      }
    } else {
      // فتح
      content.classList.remove("hidden");
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      if (icon) {
        gsap.to(icon, { rotation: 180, duration: 0.3 });
      }
    }
  });
});

// إغلاق القائمة عند تغيير حجم الشاشة إلى desktop
window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 1024 &&
    mobileNavMenu &&
    !mobileNavMenu.classList.contains("hidden")
  ) {
    closeMobileNav();
  }
});

// تم إزالة تأثيرات hover - الآن يتم التعامل مع القوائم بالنقر فقط

// ============================================
// Hero Slider with Swiper.js, GSAP & Lenis
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const initialDir = document.documentElement.getAttribute("dir") || "rtl";
  let isRTLLayout = initialDir === "rtl";

  // Detect device type
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const isDesktop = window.innerWidth > 1024;

  // إعدادات الانتقال المحسّنة - انتقال سلس وجميل
  const transitionSpeed = isMobile ? 1500 : isTablet ? 1800 : 2000;

  // Initialize Swiper
  const heroSwiper = new Swiper(".hero-swiper", {
    // Basic settings
    loop: true,
    // لا يوجد autoplay - التبديل فقط بالأسهم
    autoplay: false,
    direction: "horizontal",
    rtl: isRTLLayout,
    speed: transitionSpeed,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    // Navigation
    navigation: {
      nextEl: ".hero-nav-next",
      prevEl: ".hero-nav-prev",
    },

    // Pagination
    pagination: {
      el: ".hero-pagination",
      clickable: true,
      dynamicBullets: false, // تعطيل dynamicBullets للانتقال الأكثر سلاسة
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
      // تحسين الانتقال السلس
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Mousewheel - Disabled to prevent scroll conflicts with Lenis
    mousewheel: {
      enabled: false, // Disabled to prevent scroll conflicts
      invert: false,
      sensitivity: 1,
      releaseOnEdges: true,
    },

    // Touch events (optimized for mobile)
    touchEventsTarget: "container",
    simulateTouch: true,
    touchRatio: isMobile ? 1.5 : 1, // More sensitive on mobile
    touchAngle: 45,
    grabCursor: isDesktop,
    // تحسين اللمس للشاشات الصغيرة
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,
    threshold: isMobile ? 10 : 5, // Lower threshold on mobile

    // Events
    on: {
      init: function () {
        animateSlideContent(this.slides[this.activeIndex]);
        animateMedia(this.slides[this.activeIndex]);
      },
      slideChange: function () {
        // Reset previous slide content
        const prevSlide = this.slides[this.previousIndex];
        if (prevSlide) {
          resetSlideContent(prevSlide);
          resetMedia(prevSlide);
        }

        // Animate current slide content
        animateSlideContent(this.slides[this.activeIndex]);
        animateMedia(this.slides[this.activeIndex]);

        // تحسين الانتقال السلس للـ pagination
        const pagination = document.querySelector(".hero-pagination");
        if (pagination) {
          const bullets = pagination.querySelectorAll(
            ".swiper-pagination-bullet"
          );
          bullets.forEach((bullet, index) => {
            if (bullet.classList.contains("swiper-pagination-bullet-active")) {
              // إضافة animation class للانتقال السلس
              bullet.style.animation = "smooth-transition 0.6s ease-out";
            }
          });
        }
      },
      slideChangeTransitionStart: function () {
        // Start transition animations with Anime.js
        const currentSlide = this.slides[this.activeIndex];
        if (currentSlide && typeof anime !== "undefined") {
          const media = currentSlide.querySelector(".hero-image, .hero-video");
          if (media) {
            anime({
              targets: media,
              scale: 1.1,
              duration: 1500,
              easing: "easeInOutQuad",
            });
          }
        }

        // تحسين الانتقال السلس للـ pagination عند بدء الانتقال
        const pagination = document.querySelector(".hero-pagination");
        if (pagination) {
          const bullets = pagination.querySelectorAll(
            ".swiper-pagination-bullet"
          );
          bullets.forEach((bullet) => {
            // إضافة transition سلس للجميع
            bullet.style.transition =
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
          });
        }
      },
      slideChangeTransitionEnd: function () {
        // End transition animations with Anime.js
        const currentSlide = this.slides[this.activeIndex];
        if (currentSlide && typeof anime !== "undefined") {
          const media = currentSlide.querySelector(".hero-image, .hero-video");
          if (media) {
            anime({
              targets: media,
              scale: 1,
              duration: 2000,
              easing: "easeOutQuad",
            });
          }
        }
      },
    },
  });

  // Anime.js Animation function for slide content (optimized for all screens)
  function animateSlideContent(slide) {
    if (!slide || typeof anime === "undefined") return;

    const title = slide.querySelector(".hero-title");
    const subtitle = slide.querySelector(".hero-subtitle");
    const buttons = slide.querySelector(".hero-buttons");

    // Adjust animation settings based on device
    const isMobileDevice = window.innerWidth <= 768;
    const titleDuration = isMobileDevice ? 400 : 500;
    const titleStagger = isMobileDevice ? 30 : 50;

    // Animate title directly without splitting into spans
    if (title) {
      // Store original text if needed
      const originalText = title.textContent;

      // Animate the h1 element directly
      anime({
        targets: title,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.95, 1],
        duration: titleDuration,
        delay: 100,
        easing: "easeOutQuad",
      });
    }

    // Animate subtitle with Anime.js
    if (subtitle) {
      anime({
        targets: subtitle,
        opacity: [0, 0.95],
        translateY: [isMobileDevice ? 20 : 25, 0],
        duration: isMobileDevice ? 500 : 600,
        delay: 300,
        easing: "easeOutQuad",
      });
    }

    // Animate buttons with stagger using Anime.js
    if (buttons) {
      const buttonElements = buttons.querySelectorAll(".hero-btn");

      anime({
        targets: buttonElements,
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 500,
        delay: anime.stagger(80, { start: 400 }),
        easing: "easeOutQuad",
      });
    }
  }

  // Reset slide content for smooth transitions using Anime.js
  function resetSlideContent(slide) {
    if (!slide || typeof anime === "undefined") return;

    const title = slide.querySelector(".hero-title");
    const subtitle = slide.querySelector(".hero-subtitle");
    const buttons = slide.querySelector(".hero-buttons");

    // Reset all elements instantly
    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(50px)";
    }
    if (subtitle) {
      subtitle.style.opacity = "0";
      subtitle.style.transform = "translateY(50px)";
    }
    if (buttons) {
      buttons.style.opacity = "0";
      buttons.style.transform = "translateY(50px)";
    }

    // Reset title animation (no word elements to reset)
    if (title) {
      // Just reset the h1 element itself
      title.style.opacity = "0";
      title.style.transform = "translateY(50px) scale(0.9)";
    }

    // Reset button animations
    if (buttons) {
      const buttonElements = buttons.querySelectorAll(".hero-btn");
      buttonElements.forEach((btn) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(30px) scale(0.8)";
      });
    }
  }

  // Animate media (images/videos) with parallax effect using Anime.js
  function animateMedia(slide) {
    if (!slide || typeof anime === "undefined") return;

    const media = slide.querySelector(".hero-image, .hero-video");
    const overlay = slide.querySelector(".hero-overlay");
    const isMobileDevice = window.innerWidth <= 768;

    if (media) {
      // Initial scale animation (faster on mobile)
      const scaleDuration = isMobileDevice ? 1500 : 2000;

      // Set initial scale
      media.style.transform = "scale(1.05)";

      anime({
        targets: media,
        scale: 1,
        duration: scaleDuration,
        easing: "easeOutQuad",
      });

      // Parallax effect on mouse move (only on desktop/tablet)
      if (!isMobileDevice) {
        let parallaxHandler = function (e) {
          const rect = slide.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;

          anime({
            targets: media,
            translateX: (x - 0.5) * 20,
            translateY: (y - 0.5) * 20,
            duration: 1000,
            easing: "easeOutQuad",
          });
        };

        slide.addEventListener("mousemove", parallaxHandler);

        slide.addEventListener("mouseleave", function () {
          anime({
            targets: media,
            translateX: 0,
            translateY: 0,
            duration: 1000,
            easing: "easeOutQuad",
          });
        });
      }
    }

    if (overlay) {
      overlay.style.opacity = "0.8";
      anime({
        targets: overlay,
        opacity: 1,
        duration: isMobileDevice ? 800 : 1000,
        easing: "easeOutQuad",
      });
    }
  }

  // Reset media animations using Anime.js
  function resetMedia(slide) {
    if (!slide || typeof anime === "undefined") return;

    const media = slide.querySelector(".hero-image, .hero-video");
    if (media) {
      // Reset transform instantly
      media.style.transform = "translateX(0) translateY(0) scale(1.05)";
    }
  }

  // Integrate with Lenis smooth scroll - السماح بالتمرير الطبيعي دائماً
  const heroSection = document.querySelector(".hero-slider-section");

  if (typeof lenis !== "undefined" && heroSection) {
    // Lenis يعمل دائماً - لا نوقفه إلا عند النقر على أزرار Swiper فقط
    let isClickingSwiperControl = false;

    // فقط عند النقر على أزرار Swiper، نوقف Lenis مؤقتاً
    const swiperButtons = heroSection.querySelectorAll(
      ".hero-nav-next, .hero-nav-prev"
    );

    swiperButtons.forEach((button) => {
      button.addEventListener("mousedown", () => {
        isClickingSwiperControl = true;
        if (isDesktop) {
          lenis.stop();
        }
      });

      button.addEventListener("mouseup", () => {
        isClickingSwiperControl = false;
        setTimeout(() => {
          if (isDesktop && !isMobileNavOpen) {
            lenis.start();
          }
        }, 300);
      });
    });


    // التأكد من أن Lenis يعمل دائماً عند التمرير
    heroSection.addEventListener(
      "wheel",
      (e) => {
        // دائماً نشغّل Lenis عند التمرير
        if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
          lenis.start();
        }
      },
      { passive: true }
    );

    // التأكد من أن Lenis يعمل عند التمرير باللمس
    heroSection.addEventListener(
      "touchmove",
      () => {
        if (!isClickingSwiperControl && !isMobileNavOpen) {
          lenis.start();
        }
      },
      { passive: true }
    );

    // التأكد من أن Lenis يعمل دائماً - حتى داخل hero section
    // Use Intersection Observer للتحقق من موقع hero section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Lenis يعمل دائماً - حتى لو كان hero section مرئي
          if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
            lenis.start();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(heroSection);

    // التأكد من أن Lenis يعمل دائماً عند التمرير
    let scrollCheckTimeout;
    window.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollCheckTimeout);
        scrollCheckTimeout = setTimeout(() => {
          // Lenis يعمل دائماً عند التمرير
          if (isDesktop && !isClickingSwiperControl && !isMobileNavOpen) {
            lenis.start();
          }
        }, 50);
      },
      { passive: true }
    );

    // Remove problematic slideChange scroll behavior
    // This was causing scroll to jump to top on every slide change
    // heroSwiper.on('slideChange', function() {
    //     // Removed - was causing scroll issues
    // });
  }

  // Handle window resize for responsive behavior
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // Update Swiper on resize
      if (heroSwiper) {
        heroSwiper.update();
        heroSwiper.updateSlides();
        heroSwiper.updateSlidesClasses();
      }
    }, 250);
  });

  // Enhanced button hover effects with Anime.js
  document.querySelectorAll(".hero-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      if (typeof anime !== "undefined") {
        anime({
          targets: this,
          scale: 1.05,
          translateY: -4,
          duration: 300,
          easing: "easeOutQuad",
        });
      }
    });

    btn.addEventListener("mouseleave", function () {
      if (typeof anime !== "undefined") {
        anime({
          targets: this,
          scale: 1,
          translateY: 0,
          duration: 300,
          easing: "easeOutQuad",
        });
      }
    });
  });

  // Initial animation for first slide
  setTimeout(() => {
    const firstSlide = heroSwiper.slides[heroSwiper.activeIndex];
    if (firstSlide) {
      animateSlideContent(firstSlide);
      animateMedia(firstSlide);
    }
  }, 500);

  // تم إزالة autoplay - التبديل فقط بالأسهم

  function updateHeroDirection() {
    const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
    isRTLLayout = htmlDir === "rtl";

    if (heroSwiper && typeof heroSwiper.changeLanguageDirection === "function") {
      heroSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
    } else if (heroSwiper) {
      heroSwiper.params.rtl = isRTLLayout;
      heroSwiper.update();
      heroSwiper.updateSlides();
      heroSwiper.updateSlidesClasses();
    }
  }

  const heroDirObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "dir") {
        updateHeroDirection();
      }
    });
  });

  heroDirObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir"],
  });

  heroDirObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["dir"],
  });

  document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(updateHeroDirection, 100);
    });
  });
});

// ============================================
// View All News Button - Animated Border with GSAP (Always Active)
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const viewAllBtn = document.querySelector(".view-all-news-btn");

  if (viewAllBtn && typeof gsap !== "undefined") {
    // إنشاء border animated باستخدام GSAP - دائماً يعمل
    const borderElement = viewAllBtn;

    // Set initial border style
    gsap.set(borderElement, {
      border: "2px solid transparent",
    });

    // Continuous border animation - دائماً يعمل
    const borderAnimation = gsap.timeline({ repeat: -1 });
    borderAnimation
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      })
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.3)",
        ease: "sine.inOut",
      })
      .to(borderElement, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      });

    // Hover animation with GSAP
    viewAllBtn.addEventListener("mouseenter", function () {
      const tl = gsap.timeline();

      tl.to(this, {
        duration: 0.4,
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 158, 145, 0.4)",
        ease: "power2.out",
      });
    });

    viewAllBtn.addEventListener("mouseleave", function () {
      const tl = gsap.timeline();

      tl.to(this, {
        duration: 0.4,
        scale: 1,
        boxShadow: "0 4px 12px rgba(0, 158, 145, 0.2)",
        ease: "power2.out",
      });
    });
  }
});

// News Slider Initialization - Professional & Responsive
document.addEventListener("DOMContentLoaded", function () {
  const newsSwiperElement = document.querySelector(".news-swiper");

  if (newsSwiperElement && typeof Swiper !== "undefined") {
    const initialDir = document.documentElement.getAttribute("dir") || "rtl";
    let isRTLLayout = initialDir === "rtl";

    const newsSwiper = new Swiper(".news-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      direction: "horizontal",
      rtl: isRTLLayout,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: isRTLLayout,
      },
      speed: 800,
      grabCursor: true,
      pagination: {
        el: ".news-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".news-nav-next",
        prevEl: ".news-nav-prev",
      },
      breakpoints: {
        // Extra Small devices (phones, 320px and up)
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // Small devices (phones, 480px and up)
        480: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // Medium devices (tablets, 640px and up)
        640: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        // Large devices (tablets, 768px and up) - أقل من 776px = 1 slide
        775: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Large devices (tablets, 776px and up)
        776: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        // Extra large devices (desktops, 1024px and up)
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // 2XL devices (large desktops, 1280px and up)
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        // 3XL devices (extra large desktops, 1536px and up)
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        // 4XL devices (ultra large desktops, 1920px and up)
        1920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      // تحسينات الأداء
      watchOverflow: true,
      observer: true,
      observeParents: true,
      // تأثيرات الانتقال
      effect: "slide",
      // إعدادات اللمس
      touchEventsTarget: "container",
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      // إعدادات الكيبورد
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      // إعدادات الماوس
      mousewheel: {
        enabled: false,
      },
    });

    // إظهار/إخفاء النص بناءً على الـ slide في الوسط
    function updateActiveSlideContent() {
      const allSlides = newsSwiperElement.querySelectorAll(".swiper-slide");
      const slidesPerView = newsSwiper.params.slidesPerView || 1;
      const containerRect = newsSwiperElement.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let centerSlide = null;
      let minDistance = Infinity;

      // إخفاء جميع النصوص وتأثيرات zoom أولاً
      allSlides.forEach((slide, index) => {
        const content = slide.querySelector(".news-card-content");
        const image = slide.querySelector(".news-card-image img");

        if (content) {
          content.style.transform = "translateY(100%)";
          content.style.opacity = "0";
        }

        if (image) {
          image.style.transform = "scale(1)";
        }

        // حساب المسافة من مركز الـ slide إلى مركز الـ container
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        // التحقق إذا كان الـ slide مرئي في الـ viewport
        if (
          slideRect.left < containerRect.right &&
          slideRect.right > containerRect.left
        ) {
          if (distance < minDistance) {
            minDistance = distance;
            centerSlide = slide;
          }
        }
      });

      // إظهار النص وتأثير zoom للـ slide في الوسط
      if (centerSlide) {
        const content = centerSlide.querySelector(".news-card-content");
        const image = centerSlide.querySelector(".news-card-image img");

        if (content) {
          content.style.transform = "translateY(0)";
          content.style.opacity = "1";
        }

        if (image) {
          image.style.transform = "scale(1.05)";
        }
      }
    }

    // تحديث عند تغيير الـ slide
    newsSwiper.on("slideChange", function () {
      setTimeout(updateActiveSlideContent, 50);
    });

    // تحديث أثناء الانتقال
    newsSwiper.on("transitionStart", function () {
      updateActiveSlideContent();
    });

    // تحديث عند بدء الانتقال
    newsSwiper.on("slideChangeTransitionStart", function () {
      updateActiveSlideContent();
    });

    // تحديث أثناء الانتقال
    newsSwiper.on("transitionProgress", function () {
      updateActiveSlideContent();
    });

    // تحديث عند انتهاء الانتقال
    newsSwiper.on("slideChangeTransitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

    // تحديث عند انتهاء الانتقال
    newsSwiper.on("transitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

    // تحديث عند التهيئة
    newsSwiper.on("init", function () {
      setTimeout(updateActiveSlideContent, 150);
    });

    // تحديث Swiper عند تغيير حجم الشاشة
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (newsSwiper) {
          newsSwiper.update();
          newsSwiper.updateSlides();
          newsSwiper.updateSlidesClasses();
          updateActiveSlideContent();
        }
      }, 250);
    });

    // تحديث أولي عند التحميل
    setTimeout(function () {
      updateActiveSlideContent();
    }, 100);

    function updateNewsDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      isRTLLayout = htmlDir === "rtl";

      if (newsSwiper && typeof newsSwiper.changeLanguageDirection === "function") {
        newsSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
      } else if (newsSwiper) {
        newsSwiper.params.rtl = isRTLLayout;
        if (newsSwiper.params.autoplay) {
          newsSwiper.params.autoplay.reverseDirection = isRTLLayout;
        }
        newsSwiper.update();
        newsSwiper.updateSlides();
        newsSwiper.updateSlidesClasses();
      }

      if (newsSwiper.autoplay && newsSwiper.autoplay.running) {
        newsSwiper.autoplay.stop();
        newsSwiper.autoplay.start();
      }
    }

    const newsDirObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateNewsDirection();
        }
      });
    });

    newsDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    newsDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updateNewsDirection, 100);
      });
    });
  }
});

// Community Service Slider Initialization - Professional with Center Pop-up Effect
document.addEventListener("DOMContentLoaded", function () {
  const featuresSwiperElement = document.querySelector(".university-features-swiper");

  if (featuresSwiperElement && typeof Swiper !== "undefined") {
    const totalSlides = featuresSwiperElement.querySelectorAll(".swiper-slide").length;
    const shouldLoop = totalSlides > 1;
    const initialDir = document.documentElement.getAttribute("dir") || "rtl";
    let isRTL = initialDir === "rtl";

    const featuresSwiper = new Swiper(".university-features-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: shouldLoop,
      direction: "horizontal",
      rtl: isRTL,
      autoplay: shouldLoop
        ? {
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTL,
        }
        : false,
      speed: 700,
      grabCursor: true,
      pagination: {
        el: ".features-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".features-nav-next",
        prevEl: ".features-nav-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        640: {
          slidesPerView: 1.1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      watchOverflow: true,
      observer: true,
      observeParents: true,
    });

    const navNext = document.querySelector(".features-nav-next");
    const navPrev = document.querySelector(".features-nav-prev");
    const pagination = document.querySelector(".features-pagination");

    if (!shouldLoop) {
      if (navNext) navNext.style.display = "none";
      if (navPrev) navPrev.style.display = "none";
    } else {
      if (navNext) navNext.style.display = "flex";
      if (navPrev) navPrev.style.display = "flex";
    }

    if (pagination) {
      pagination.style.display = totalSlides > 1 ? "block" : "none";
    }

    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (featuresSwiper) {
          featuresSwiper.update();
          featuresSwiper.updateSlides();
          featuresSwiper.updateSlidesClasses();
        }
      }, 250);
    });

    function updateFeaturesDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      isRTL = htmlDir === "rtl";

      if (featuresSwiper) {
        featuresSwiper.params.rtl = isRTL;
        if (featuresSwiper.params.autoplay) {
          featuresSwiper.params.autoplay.reverseDirection = isRTL;
        }

        featuresSwiper.update();
        featuresSwiper.updateSlides();
        featuresSwiper.updateSlidesClasses();

        if (featuresSwiper.autoplay && featuresSwiper.autoplay.running) {
          featuresSwiper.autoplay.stop();
          featuresSwiper.autoplay.start();
        }
      }
    }

    const featuresDirObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateFeaturesDirection();
        }
      });
    });

    featuresDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    featuresDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach(function (link) {
      link.addEventListener("click", function () {
        setTimeout(updateFeaturesDirection, 100);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const communityServiceSwiperElement = document.querySelector(".community-service-swiper");

  if (communityServiceSwiperElement && typeof Swiper !== "undefined") {
    // تحديد direction بناءً على dir attribute
    const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
    const isRTL = htmlDir === "rtl";

    const communityServiceSwiper = new Swiper(".community-service-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      direction: isRTL ? "horizontal" : "horizontal", // Swiper يدعم RTL عبر direction
      rtl: isRTL, // تفعيل RTL mode
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: isRTL, // عكس الاتجاه في RTL
      },
      speed: 800,
      grabCursor: true,
      pagination: {
        el: ".community-service-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },
      navigation: {
        nextEl: ".community-service-nav-next",
        prevEl: ".community-service-nav-prev",
      },
      breakpoints: {
        // Extra Small devices (phones, 320px and up)
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // Small devices (phones, 480px and up)
        480: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // Medium devices (tablets, 640px and up)
        640: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        // Large devices (tablets, 768px and up) - أقل من 776px = 1 slide
        775: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Large devices (tablets, 776px and up)
        776: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        // Extra large devices (desktops, 1024px and up)
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // 2XL devices (large desktops, 1280px and up)
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 28,
        },
        // 3XL devices (extra large desktops, 1536px and up)
        1536: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        // 4XL devices (ultra large desktops, 1920px and up)
        1920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      // تحسينات الأداء
      watchOverflow: true,
      observer: true,
      observeParents: true,
      // تأثيرات الانتقال
      effect: "slide",
      // إعدادات اللمس
      touchEventsTarget: "container",
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      // إعدادات الكيبورد
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      // إعدادات الماوس
      mousewheel: {
        enabled: false,
      },
    });

    // إظهار/إخفاء النص بناءً على الـ slide في الوسط - تأثير منبثق احترافي
    function updateActiveSlideContent() {
      const allSlides = communityServiceSwiperElement.querySelectorAll(".swiper-slide");
      const slidesPerView = communityServiceSwiper.params.slidesPerView || 1;
      const containerRect = communityServiceSwiperElement.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let centerSlide = null;
      let minDistance = Infinity;

      // إخفاء جميع النصوص أولاً
      allSlides.forEach((slide) => {
        const content = slide.querySelector(".community-service-content");
        if (content) {
          content.classList.remove("active");
          const contentDiv = content.querySelector("div");
          if (contentDiv) {
            contentDiv.style.opacity = "0";
            contentDiv.style.transform = "scale(0.9)";
          }
        }
      });

      // البحث عن الشريحة الأقرب للوسط
      allSlides.forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          centerSlide = slide;
        }
      });

      // إظهار النص للشريحة في الوسط بتأثير منبثق
      if (centerSlide) {
        const content = centerSlide.querySelector(".community-service-content");
        if (content) {
          content.classList.add("active");
          const contentDiv = content.querySelector("div");
          if (contentDiv) {
            // استخدام GSAP لتأثير منبثق احترافي
            gsap.to(contentDiv, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          }
        }
      }
    }

    // تحديث عند تغيير الشريحة
    communityServiceSwiper.on("slideChange", function () {
      updateActiveSlideContent();
    });

    // تحديث عند بدء الانتقال
    communityServiceSwiper.on("transitionStart", function () {
      updateActiveSlideContent();
    });

    // تحديث عند بدء الانتقال
    communityServiceSwiper.on("slideChangeTransitionStart", function () {
      updateActiveSlideContent();
    });

    // تحديث أثناء الانتقال
    communityServiceSwiper.on("transitionProgress", function () {
      updateActiveSlideContent();
    });

    // تحديث عند انتهاء الانتقال
    communityServiceSwiper.on("slideChangeTransitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

    // تحديث عند انتهاء الانتقال
    communityServiceSwiper.on("transitionEnd", function () {
      setTimeout(updateActiveSlideContent, 100);
    });

    // تحديث عند التهيئة
    communityServiceSwiper.on("init", function () {
      setTimeout(updateActiveSlideContent, 150);
    });

    // تحديث Swiper عند تغيير حجم الشاشة
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (communityServiceSwiper) {
          communityServiceSwiper.update();
          communityServiceSwiper.updateSlides();
          communityServiceSwiper.updateSlidesClasses();
          updateActiveSlideContent();
        }
      }, 250);
    });

    // تحديث أولي عند التحميل
    setTimeout(function () {
      updateActiveSlideContent();
    }, 100);

    // تحديث مستمر أثناء التمرير
    let scrollTimer;
    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateActiveSlideContent, 50);
    });

    // دعم تغيير direction عند تغيير اللغة
    function updateSwiperDirection() {
      const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
      const isRTL = htmlDir === "rtl";

      // تحديث Swiper direction
      if (communityServiceSwiper) {
        // تحديث rtl parameter
        communityServiceSwiper.params.rtl = isRTL;

        // تحديث autoplay direction
        if (communityServiceSwiper.params.autoplay) {
          communityServiceSwiper.params.autoplay.reverseDirection = isRTL;
        }

        // إعادة تهيئة Swiper مع الإعدادات الجديدة
        communityServiceSwiper.update();
        communityServiceSwiper.updateSlides();
        communityServiceSwiper.updateSlidesClasses();

        // إعادة تشغيل autoplay إذا كان يعمل
        if (communityServiceSwiper.autoplay && communityServiceSwiper.autoplay.running) {
          communityServiceSwiper.autoplay.stop();
          communityServiceSwiper.autoplay.start();
        }
      }
    }

    // مراقبة تغيير dir attribute
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updateSwiperDirection();
        }
      });
    });

    // مراقبة تغيير dir على html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"]
    });

    // مراقبة تغيير dir على body element أيضاً
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"]
    });

    // Event listener لتغيير اللغة (إذا كان موجود)
    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        // انتظر قليلاً ثم حدث direction
        setTimeout(updateSwiperDirection, 100);
      });
    });
  }
});

// Community Service Logo Background Animation with GSAP & Lenis
document.addEventListener("DOMContentLoaded", function () {
  const logoBg = document.querySelector(".logo-bg-image");
  const communitySection = document.querySelector(".community-service-section");
  const sectionHeader = communitySection?.querySelector("h2");
  const sectionContent = communitySection?.querySelector(".community-service-swiper-container");

  if (logoBg && communitySection && typeof gsap !== "undefined") {
    // إخفاء الشعار في البداية
    gsap.set(logoBg, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center"
    });

    // إنشاء Timeline للـ animation الجميل
    const logoTimeline = gsap.timeline({
      delay: 1.5, // يظهر بعد المحتوى
      onComplete: function () {
        // بعد انتهاء animation الدخول، نبدأ الحركات المستمرة
        startContinuousAnimations();
      }
    });

    // Animation دخول جميل - يظهر بعد المحتوى
    logoTimeline
      .to(logoBg, {
        opacity: 0.15,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        transformOrigin: "center center"
      })
      .to(logoBg, {
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.5")
      .to(logoBg, {
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });

    // حركات مستمرة جميلة
    function startContinuousAnimations() {
      // حركة تموج خفيفة وجميلة
      gsap.to(logoBg, {
        scale: 1.08,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center"
      });

      // حركة float خفيفة
      gsap.to(logoBg, {
        y: "+=20",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center"
      });
    }

    // حركة parallax مع Lenis scroll (إذا كان متاح)
    if (typeof lenis !== "undefined") {
      lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
        const sectionRect = communitySection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;

        // حساب إذا كان القسم في viewport
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          // حساب progress القسم (0 إلى 1)
          const sectionProgress = Math.max(0, Math.min(1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          ));

          // حركة parallax بناءً على scroll
          gsap.to(logoBg, {
            y: `+=${sectionProgress * 30 - 15}`,
            x: `+=${sectionProgress * 20 - 10}`,
            duration: 0.8,
            ease: "power2.out",
            transformOrigin: "center center"
          });
        }
      });
    }

    // حركة hover جميلة
    communitySection.addEventListener("mouseenter", function () {
      gsap.to(logoBg, {
        scale: 1.2,
        opacity: 0.25,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    });

    communitySection.addEventListener("mouseleave", function () {
      const width = window.innerWidth;
      let targetOpacity = 0.15;

      if (width >= 1280) {
        targetOpacity = 0.1;
      } else if (width >= 1024) {
        targetOpacity = 0.11;
      } else if (width >= 769) {
        targetOpacity = 0.12;
      } else if (width >= 641) {
        targetOpacity = 0.14;
      } else if (width >= 481) {
        targetOpacity = 0.13;
      } else {
        targetOpacity = 0.12;
      }

      gsap.to(logoBg, {
        scale: 1.08,
        opacity: targetOpacity,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    });

    // تحديث حجم الشعار عند تغيير حجم الشاشة
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        const width = window.innerWidth;
        let targetSize = 600;
        let targetOpacity = 0.15;

        if (width >= 1280) {
          targetSize = 1000;
          targetOpacity = 0.1;
        } else if (width >= 1024) {
          targetSize = 800;
          targetOpacity = 0.11;
        } else if (width >= 769) {
          targetSize = 600;
          targetOpacity = 0.12;
        } else if (width >= 641) {
          targetSize = 450;
          targetOpacity = 0.14;
        } else if (width >= 481) {
          targetSize = 350;
          targetOpacity = 0.13;
        } else {
          targetSize = 250;
          targetOpacity = 0.12;
        }

        gsap.to(logoBg, {
          width: targetSize,
          height: targetSize,
          opacity: targetOpacity,
          duration: 0.5,
          ease: "power2.out"
        });
      }, 250);
    });

    // Animation للمحتوى أولاً (الكلام)
    if (sectionHeader) {
      gsap.from(sectionHeader, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
    }

    if (sectionContent) {
      gsap.from(sectionContent, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      });
    }
  }
});

// ============================================
// Memberships Section - Premium GSAP Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const membershipCards = document.querySelectorAll('.membership-card');

  if (!membershipCards.length) {
    return;
  }

  // استخدام requestAnimationFrame لتجنب forced reflow
  requestAnimationFrame(() => {
    // Ensure cards are visible initially
    gsap.set(membershipCards, {
      opacity: 1,
      visibility: 'visible'
    });

    // Initialize Swiper Slider
    if (typeof Swiper !== 'undefined') {
      // حساب عدد الشرائح
      const totalSlides = membershipCards.length;

      // تفعيل loop دائماً إذا كان هناك شرائح
      const shouldLoop = totalSlides >= 2;
      const initialDir = document.documentElement.getAttribute('dir') || 'rtl';
      let isRTLLayout = initialDir === 'rtl';

      // إنشاء إعدادات Swiper
      const swiperConfig = {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 600,
        grabCursor: true,
        direction: 'horizontal',
        rtl: isRTLLayout,
        pagination: {
          el: '.memberships-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      };

      // تفعيل loop و autoplay مثل قسم الأخبار - يعود لنفس الصور ولا يتوقف
      swiperConfig.loop = true; // دائماً مفعّل مثل الأخبار
      swiperConfig.autoplay = {
        delay: 3000,
        disableOnInteraction: false, // لا يتوقف عند التفاعل
        pauseOnMouseEnter: false, // لا يتوقف عند التمرير
        reverseDirection: isRTLLayout, // يتبع اللغة
      };

      const membershipsSwiper = new Swiper('.memberships-slider', swiperConfig);

      // Initial animation with GSAP - بعد تهيئة Swiper
      requestAnimationFrame(() => {
        gsap.from(membershipCards, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        });
      });

      function updateMembershipDirection() {
        const htmlDir = document.documentElement.getAttribute('dir') || 'rtl';
        isRTLLayout = htmlDir === 'rtl';

        if (membershipsSwiper) {
          membershipsSwiper.params.rtl = isRTLLayout;
          if (membershipsSwiper.params.autoplay) {
            membershipsSwiper.params.autoplay.reverseDirection = isRTLLayout;
          }
          membershipsSwiper.update();
          membershipsSwiper.updateSlides();
          membershipsSwiper.updateSlidesClasses();

          if (membershipsSwiper.autoplay && membershipsSwiper.autoplay.running) {
            membershipsSwiper.autoplay.stop();
            membershipsSwiper.autoplay.start();
          }
        }
      }

      const membershipsDirObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
            updateMembershipDirection();
          }
        });
      });

      membershipsDirObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir'],
      });

      membershipsDirObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['dir'],
      });

      document.querySelectorAll('.language-dropdown a, .mobile-nav-sub-link').forEach((link) => {
        link.addEventListener('click', () => {
          setTimeout(updateMembershipDirection, 100);
        });
      });
    }
  });

  // Add hover animations to each card
  membershipCards.forEach((card, index) => {
    const cardInner = card.querySelector('.membership-card-inner');
    const image = card.querySelector('.membership-image');
    const title = card.querySelector('.membership-title');

    card.addEventListener('mouseenter', function () {
      // Beautiful hover - slide right with glow
      gsap.to(cardInner, {
        x: 4,
        duration: 0,
        ease: "power2.out"
      });

      // Image brightness and saturation
      if (image) {
        gsap.to(image, {
          filter: 'brightness(1.1) saturate(1.15)',
          x: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      }

      // Title white color on hover
      if (title) {
        gsap.to(title, {
          color: '#ffffff',
          x: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    });

    card.addEventListener('mouseleave', function () {
      // Reset to original position
      gsap.to(cardInner, {
        x: 0,
        duration: 0.2,
        ease: "power2.in"
      });

      // Reset image
      if (image) {
        gsap.to(image, {
          filter: 'brightness(1) saturate(1)',
          x: 0,
          duration: 0.25,
          ease: "power2.in"
        });
      }

      // Reset title
      if (title) {
        gsap.to(title, {
          color: '#1e293b',
          x: 0,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    });
  });
});

// ============================================
// Partners Slider - Continuous Free Mode Swiper
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const partnersSwiperElement = document.querySelector(".partners-swiper");

  if (partnersSwiperElement && typeof Swiper !== "undefined") {
    let partnersSwiper = null;

    function initPartnersSwiper() {
      const initialDir = document.documentElement.getAttribute("dir") || "rtl";
      const isRTLLayout = initialDir === "rtl";

      return new Swiper(".partners-swiper", {
        slidesPerView: 2.2,
        spaceBetween: 24,
        loop: true,
        loopAdditionalSlides: 6,
        centeredSlides: false,
        allowTouchMove: true,
        direction: "horizontal",
        rtl: isRTLLayout,
        speed: 900,
        grabCursor: true,
        autoplay: {
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTLLayout,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      });
    }

    partnersSwiper = initPartnersSwiper();

    function rebuildPartnersSwiper() {
      if (partnersSwiper) {
        partnersSwiper.destroy(true, true);
      }
      partnersSwiper = initPartnersSwiper();
    }

    function updatePartnersDirection() {
      rebuildPartnersSwiper();
    }

    const partnersDirObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updatePartnersDirection();
        }
      });
    });

    partnersDirObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    partnersDirObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updatePartnersDirection, 100);
      });
    });
  }
});

// ============================================
// Team Slider - Conditional (Only if more than 3 slides)
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const teamSwiperElement = document.querySelector(".team-swiper");
  const teamSwiperContainer = document.querySelector(".team-swiper-container");

  if (teamSwiperElement && typeof Swiper !== "undefined") {
    // Count total slides
    const totalSlides = teamSwiperElement.querySelectorAll(".swiper-slide").length;
    const minSlidesForSlider = 4; // Activate slider if more than 3 slides

    let teamSwiper = null;

    // Initialize Swiper if more than 3 slides, otherwise use grid
    // For now, always use slider if there are slides
    if (totalSlides > minSlidesForSlider || totalSlides >= 2) {
      const initialDir = document.documentElement.getAttribute("dir") || "rtl";
      let isRTLLayout = initialDir === "rtl";
      // Initialize Swiper
      teamSwiper = new Swiper(".team-swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        direction: "horizontal",
        rtl: isRTLLayout,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: isRTLLayout,
        },
        speed: 800,
        grabCursor: true,
        pagination: {
          el: ".team-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        },
        navigation: {
          nextEl: ".team-nav-next",
          prevEl: ".team-nav-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true,
      });

      // Show/Hide Info Overlay when slide is centered
      function updateActiveTeamSlide() {
        const allSlides = teamSwiperElement.querySelectorAll(".swiper-slide");
        const containerRect = teamSwiperElement.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let centerSlide = null;
        let minDistance = Infinity;

        // Hide all overlays first
        allSlides.forEach((slide) => {
          const overlay = slide.querySelector(".team-info-overlay");
          const overlayContent = slide.querySelector(".team-info-overlay-content");
          if (overlay) {
            overlay.classList.remove("active");
            if (overlayContent) {
              gsap.set(overlayContent, { opacity: 0, y: 30 });
            }
          }
        });

        // Find the slide closest to center
        allSlides.forEach((slide) => {
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const distance = Math.abs(slideCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            centerSlide = slide;
          }
        });

        // Show overlay for centered slide
        if (centerSlide) {
          const overlay = centerSlide.querySelector(".team-info-overlay");
          const overlayContent = centerSlide.querySelector(".team-info-overlay-content");
          if (overlay && overlayContent) {
            overlay.classList.add("active");
            gsap.to(overlayContent, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          }
        }
      }

      // Update on slide change
      teamSwiper.on("slideChange", () => {
        setTimeout(updateActiveTeamSlide, 100);
      });

      teamSwiper.on("transitionStart", () => {
        updateActiveTeamSlide();
      });

      teamSwiper.on("transitionEnd", () => {
        setTimeout(updateActiveTeamSlide, 100);
      });

      teamSwiper.on("init", () => {
        setTimeout(updateActiveTeamSlide, 150);
      });

      // Update on resize
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (teamSwiper) {
            teamSwiper.update();
            updateActiveTeamSlide();
          }
        }, 250);
      });

      // Initial update
      setTimeout(updateActiveTeamSlide, 100);

      // Update on scroll
      let scrollTimer;
      window.addEventListener("scroll", () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateActiveTeamSlide, 50);
      });

      // Hide navigation and pagination if not needed
      const navNext = document.querySelector(".team-nav-next");
      const navPrev = document.querySelector(".team-nav-prev");
      const pagination = document.querySelector(".team-pagination");

      if (navNext) navNext.style.display = "flex";
      if (navPrev) navPrev.style.display = "flex";
      if (pagination) pagination.style.display = "block";

      function updateTeamDirection() {
        const htmlDir = document.documentElement.getAttribute("dir") || "rtl";
        isRTLLayout = htmlDir === "rtl";

        if (teamSwiper) {
          teamSwiper.params.rtl = isRTLLayout;
          if (teamSwiper.params.autoplay) {
            teamSwiper.params.autoplay.reverseDirection = isRTLLayout;
          }
          if (typeof teamSwiper.changeLanguageDirection === "function") {
            teamSwiper.changeLanguageDirection(isRTLLayout ? "rtl" : "ltr");
          } else {
            teamSwiper.update();
            teamSwiper.updateSlides();
            teamSwiper.updateSlidesClasses();
          }

          if (teamSwiper.autoplay && teamSwiper.autoplay.running) {
            teamSwiper.autoplay.stop();
            teamSwiper.autoplay.start();
          }
        }
      }

      const teamDirObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "dir") {
            updateTeamDirection();
          }
        });
      });

      teamDirObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["dir"],
      });

      teamDirObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["dir"],
      });

      document.querySelectorAll(".language-dropdown a, .mobile-nav-sub-link").forEach((link) => {
        link.addEventListener("click", () => {
          setTimeout(updateTeamDirection, 100);
        });
      });
    } else {
      // Less than 4 slides - Use Grid Layout (Static)
      teamSwiperContainer.classList.add("team-grid-mode");
      teamSwiperElement.classList.add("team-grid");

      // Hide navigation and pagination
      const navNext = document.querySelector(".team-nav-next");
      const navPrev = document.querySelector(".team-nav-prev");
      const pagination = document.querySelector(".team-pagination");

      if (navNext) navNext.style.display = "none";
      if (navPrev) navPrev.style.display = "none";
      if (pagination) pagination.style.display = "none";

      // Show all overlays on hover for grid mode
      const allCards = teamSwiperElement.querySelectorAll(".team-member-card");
      allCards.forEach((card) => {
        const overlay = card.querySelector(".team-info-overlay");
        const overlayContent = card.querySelector(".team-info-overlay-content");

        if (overlay && overlayContent) {
          card.addEventListener("mouseenter", () => {
            overlay.classList.add("active");
            gsap.to(overlayContent, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1
            });
          });

          card.addEventListener("mouseleave", () => {
            overlay.classList.remove("active");
            gsap.to(overlayContent, {
              opacity: 0,
              y: 30,
              duration: 0.4,
              ease: "power2.in"
            });
          });
        }
      });
    }
  }
});

// GSAP ScrollTrigger Animation for Goal Cards
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  // تسجيل ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // الحصول على جميع goal-step elements
  const goalSteps = document.querySelectorAll(".about-goals-stack .goal-step");

  if (goalSteps.length > 0) {
    goalSteps.forEach((step, index) => {
      // إعداد الحالة الأولية
      gsap.set(step, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      // إنشاء animation لكل كارد
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
          // تأخير بين كل كارد
          delay: index * 0.15,
        }
      });

      // تأثير إضافي للكارد عند الظهور
      const goalCard = step.querySelector(".goal-card");
      const goalIcon = step.querySelector(".goal-card-icon");
      const goalNumber = step.querySelector(".goal-step-number");

      if (goalCard) {
        gsap.set(goalCard, { opacity: 0, y: 20 });
        gsap.to(goalCard, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalIcon) {
        gsap.set(goalIcon, { scale: 0, rotation: -180 });
        gsap.to(goalIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          delay: index * 0.15 + 0.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalNumber) {
        gsap.set(goalNumber, { scale: 0, rotation: -180 });
        gsap.to(goalNumber, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }
    });
  }
});

// GSAP ScrollTrigger Animation for Goal Cards (About Page)
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  // التحقق من أننا في صفحة about.html (وليس college-medicine)
  const isAboutPage = document.querySelector('.about-page-main');
  const isCollegeMedicinePage = document.querySelector('.med-page-main');

  if (!isAboutPage || isCollegeMedicinePage) {
    return; // إذا لم تكن صفحة about أو كانت صفحة college-medicine، لا ننفذ الكود
  }

  // تسجيل ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // الحصول على جميع goal-step elements
  const goalSteps = document.querySelectorAll(".about-goals-stack .goal-step");

  if (goalSteps.length > 0) {
    goalSteps.forEach((step, index) => {
      // إعداد الحالة الأولية
      gsap.set(step, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      // إنشاء animation لكل كارد
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
          // تأخير بين كل كارد
          delay: index * 0.15,
        }
      });

      // تأثير إضافي للكارد عند الظهور
      const goalCard = step.querySelector(".goal-card");
      const goalIcon = step.querySelector(".goal-card-icon");
      const goalNumber = step.querySelector(".goal-step-number");

      if (goalCard) {
        gsap.set(goalCard, { opacity: 0, y: 20 });
        gsap.to(goalCard, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalIcon) {
        gsap.set(goalIcon, { scale: 0, rotation: -180 });
        gsap.to(goalIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          delay: index * 0.15 + 0.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }

      if (goalNumber) {
        gsap.set(goalNumber, { scale: 0, rotation: -180 });
        gsap.to(goalNumber, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      }
    });
  }
});

// ============================================
// Labs Accordion Toggle Function
// ============================================
/**
 * Toggle function for labs accordion items
 * Opens/closes accordion items with smooth animations
 * @param {HTMLElement} button - The accordion header button element
 */
function toggleAccordion(button) {
  // Support both lab-accordion and calendar-accordion
  const item = button.closest('.lab-accordion-item, .calendar-accordion-item');
  const content = item.querySelector('.lab-accordion-content, .calendar-accordion-content');
  const arrow = button.querySelector('.lab-accordion-arrow, .calendar-accordion-arrow');
  const isOpen = !content.classList.contains('hidden');

  // Close all other accordions (both types)
  document.querySelectorAll('.lab-accordion-item, .calendar-accordion-item').forEach(otherItem => {
    if (otherItem !== item) {
      const otherContent = otherItem.querySelector('.lab-accordion-content, .calendar-accordion-content');
      const otherArrow = otherItem.querySelector('.lab-accordion-arrow, .calendar-accordion-arrow');
      if (otherContent) otherContent.classList.add('hidden');
      otherItem.classList.remove('active');
      if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
    }
  });

  // Toggle current accordion
  if (isOpen) {
    content.classList.add('hidden');
    item.classList.remove('active');
    arrow.style.transform = 'rotate(0deg)';
  } else {
    content.classList.remove('hidden');
    item.classList.add('active');
    arrow.style.transform = 'rotate(180deg)';
  }
}

// Make function globally available
window.toggleAccordion = toggleAccordion;

// ============================================
// Student Guide Page - Download Button Animation
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn && typeof gsap !== "undefined") {
    // Border animated باستخدام GSAP - دائماً يعمل
    gsap.set(downloadBtn, {
      border: "2px solid transparent",
    });

    // Continuous border animation - دائماً يعمل
    const borderAnimation = gsap.timeline({ repeat: -1 });
    borderAnimation
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      })
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.3)",
        ease: "sine.inOut",
      })
      .to(downloadBtn, {
        duration: 1.5,
        borderColor: "rgba(0, 158, 145, 0.6)",
        ease: "sine.inOut",
      });

    // Hover animation with GSAP (without scale)
    downloadBtn.addEventListener("mouseenter", function () {
      gsap.to(this, {
        duration: 0.4,
        boxShadow: "0 10px 30px rgba(0, 158, 145, 0.4)",
        ease: "power2.out",
      });
    });

    downloadBtn.addEventListener("mouseleave", function () {
      gsap.to(this, {
        duration: 0.4,
        boxShadow: "0 4px 12px rgba(0, 158, 145, 0.2)",
        ease: "power2.out",
      });
    });
  }

  // Student Portal Page Animation
  const studentTitle = document.querySelector('.student-title');
  const studentCards = document.querySelectorAll('.student-card');

  if (studentTitle && studentCards.length > 0) {
    // Set initial state - hide elements
    gsap.set('.student-title', { opacity: 0, y: -20 });
    gsap.set('.student-card', { opacity: 0, y: 30 });

    // Create timeline for entrance animation - يبدأ مباشرة
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      delay: 0 // بدون تأخير
    });

    // Animate title - خفيف وسريع
    tl.to('.student-title', {
      opacity: 1,
      y: 0,
      duration: 0.4
    });

    // Animate cards - هادئ وسلس
    tl.to('.student-card', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.2');
  }

  // ====================================
  // Regulations Page Animations
  // ====================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Page header animation for regulations page
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
      gsap.from('.page-header h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.page-header p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });
    }

    // Regulation cards animation with stagger on scroll
    const regulationCards = document.querySelectorAll('[data-card-animate]');
    if (regulationCards.length > 0) {
      gsap.set(regulationCards, {
        opacity: 0,
        y: 60,
        rotateX: -15
      });

      ScrollTrigger.batch(regulationCards, {
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: 'power3.out',
            overwrite: true
          });
        },
        once: true,
        start: 'top 95%'
      });
    }
  }

});

// ============================================
// Video Cards Functionality - Lectures Videos Page
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    // التحقق من وجود عناصر الفيديو في الصفحة
    const videoCards = document.querySelectorAll(".video-card");
    if (videoCards.length === 0) return;

    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const closeModal = document.getElementById("closeModal");

    if (!videoModal || !videoFrame || !closeModal) return;

    // Lazy loading للأنيميشن - تبدأ فقط عندما يكون العنصر مرئياً
    const playButtons = document.querySelectorAll(".play-button");
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: "50px"
    });

    playButtons.forEach((button) => {
        animationObserver.observe(button);
    });

    // فتح الفيديو في modal
    videoCards.forEach((card) => {
        const playButton = card.querySelector(".play-button");
        const videoId = card.getAttribute("data-video-id");

        if (playButton && videoId) {
            playButton.addEventListener("click", function (e) {
                e.stopPropagation();
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                videoModal.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        }
    });

    // إغلاق modal
    closeModal.addEventListener("click", function () {
        videoModal.classList.remove("active");
        videoFrame.src = "";
        document.body.style.overflow = "";
    });

    // إغلاق عند الضغط خارج الفيديو
    videoModal.addEventListener("click", function (e) {
        if (e.target === videoModal) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
            document.body.style.overflow = "";
        }
    });

    // إغلاق بـ ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && videoModal.classList.contains("active")) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
            document.body.style.overflow = "";
        }
    });
});

// // ============================================
// // Magazine Medical Sciences Page Animations
// // ============================================
// document.addEventListener('DOMContentLoaded', function() {
//     // التحقق من وجود صفحة المجلة
//     const magazinePage = document.querySelector('.magazine-hero-section');
//     if (!magazinePage) return;

//     if (typeof gsap !== 'undefined') {
//         // Animation للعنوان الرئيسي - سريع ومباشر
//         const magazineTitle = document.querySelector('.magazine-hero-content h1');
//         if (magazineTitle) {
//             gsap.to(magazineTitle, {
//                 opacity: 0,
//                 y: -20,
//                 duration: 0.5,
//                 ease: 'power2.out',
//                 delay: 0.1
//             });
//         }

//         // Animation لصورة الغلاف - سريع ومباشر
//         const magazineCover = document.querySelector('.magazine-cover-wrapper img');
//         if (magazineCover) {
//             gsap.to(magazineCover, {
//                 opacity: 0,
//                 scale: 0.95,
//                 y: 20,
//                 duration: 0.6,
//                 ease: 'power2.out',
//                 delay: 0.2
//             });
//         }

//         // Animation للكروت - تظهر مباشرة بدون scroll
//         const magazineCards = document.querySelectorAll('.magazine-section-card');
//         magazineCards.forEach((card, index) => {
//             gsap.from(card, {
//                 opacity: 0,
//                 y: 30,
//                 duration: 0.5,
//                 ease: 'power2.out',
//                 delay: 0.3 + (index * 0.1)
//             });
//         });

//         // Animation للمحررين - تظهر مباشرة بدون scroll
//         const editorCards = document.querySelectorAll('.editor-card');
//         editorCards.forEach((card, index) => {
//             gsap.to(card, {
//                 opacity: 0,
//                 x: -20,
//                 duration: 0.4,
//                 ease: 'power2.out',
//                 delay: 0.5 + (index * 0.08)
//             });
//         });
//     }
// });
 