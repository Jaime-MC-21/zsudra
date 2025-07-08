

// App state
const state = {
  currentPage: "home",
  selectedCourse: null,
  cart: [],
  user: null,
  purchasedCourses: [],
  currentLearningCourse: null,
  courseProgress: {},
  showLoginModal: false,
  showRegisterModal: false,
  loginError: "",
  registerError: "",
  welcomeMessage: "",
  isLoggingIn: false,
  isRegistering: false,
  profileForm: { name: "", email: "", password: "" },
  profileUpdateMessage: "",
  isUpdatingProfile: false,
  showInstructorModal: false,
  instructorForm: { name: "", email: "", experience: "" },
  instructorSubmitMessage: "",
  isSubmittingInstructor: false,
  showTeachSection: false,
  // Eliminamos el array users ya que ahora manejamos usuarios en el backend
};

// Elementos del DOM
const elements = {
  // Header
  logoBtn: document.getElementById("logo-btn"),
  coursesBtn: document.getElementById("courses-btn"),
  myCoursesBtn: document.getElementById("my-courses-btn"),
  teachBtn: document.getElementById("teach-btn"),
  cartBtn: document.getElementById("cart-btn"),
  cartBadge: document.getElementById("cart-badge"),
  authButtons: document.getElementById("auth-buttons"),
  userMenu: document.getElementById("user-menu"),
  profileBtn: document.getElementById("profile-btn"),
  username: document.getElementById("username"),
  logoutBtn: document.getElementById("logout-btn"),
  loginBtn: document.getElementById("login-btn"),
  registerBtn: document.getElementById("register-btn"),
  backToCoursesBtn: document.getElementById("back-to-courses-btn"),


  // Páginas
  homePage: document.getElementById("home-page"),
  courseDetailPage: document.getElementById("course-detail-page"),
  cartPage: document.getElementById("cart-page"),
  profilePage: document.getElementById("profile-page"),
  myCoursesPage: document.getElementById("my-courses-page"),
  courseLearningPage: document.getElementById("course-learning-page"),
  teachPage: document.getElementById("teach-page"),

  // Home page
  coursesGrid: document.getElementById("courses-grid"),

  // Course detail page
  courseDetailImage: document.getElementById("course-detail-image"),
  courseDetailTitle: document.getElementById("course-detail-title"),
  courseDetailDescription: document.getElementById("course-detail-description"),
  courseDetailMeta: document.getElementById("course-detail-meta"),
  instructorAvatar: document.getElementById("instructor-avatar"),
  instructorName: document.getElementById("instructor-name"),
  instructorRole: document.getElementById("instructor-role"),
  instructorBio: document.getElementById("instructor-bio"),
  courseContentMeta: document.getElementById("course-content-meta"),
  lessonList: document.getElementById("lesson-list"),
  courseDetailPrice: document.getElementById("course-detail-price"),
  courseDetailOriginalPrice: document.getElementById(
    "course-detail-original-price"
  ),
  buyNowBtn: document.getElementById("buy-now-btn"),
  addToCartBtn: document.getElementById("add-to-cart-btn"),

  // Cart page
  cartEmpty: document.getElementById("cart-empty"),
  cartContent: document.getElementById("cart-content"),
  exploreCoursesBtn: document.getElementById("explore-courses-btn"),
  cartItems: document.querySelector(".cart-items"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartTotal: document.getElementById("cart-total"),
  purchaseCartBtn: document.getElementById("purchase-cart-btn"),
  loginRequiredMessage: document.getElementById("login-required-message"),

  // Profile page
  profileAvatar: document.getElementById("profile-avatar"),
  profileName: document.getElementById("profile-name"),
  profileEmail: document.getElementById("profile-email"),
  profileJoinDate: document.getElementById("profile-join-date"),
  profileForm: document.getElementById("profile-form"),
  profileNameInput: document.getElementById("profile-name-input"),
  profileEmailInput: document.getElementById("profile-email-input"),
  profilePasswordInput: document.getElementById("profile-password-input"),
  profileUpdateMessage: document.getElementById("profile-update-message"),
  updateProfileBtn: document.getElementById("update-profile-btn"),

  // My courses page
  myCoursesEmpty: document.getElementById("my-courses-empty"),
  myCoursesContent: document.getElementById("my-courses-content"),
  myCoursesGrid: document.getElementById("my-courses-grid"),
  exploreMyCoursesBtn: document.getElementById("explore-my-courses-btn"),

  // Course learning page
  learningCourseTitle: document.getElementById("learning-course-title"),
  learningCourseInstructor: document.getElementById(
    "learning-course-instructor"
  ),
  backToMyCoursesBtn: document.getElementById("back-to-my-courses-btn"),
  progressText: document.getElementById("progress-text"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),
  currentLessonTitle: document.getElementById("current-lesson-title"),
  currentLessonFullTitle: document.getElementById("current-lesson-full-title"),
  currentLessonDuration: document.getElementById("current-lesson-duration"),
  markCompleteBtn: document.getElementById("mark-complete-btn"),
  nextLessonBtn: document.getElementById("next-lesson-btn"),
  courseLessonsList: document.getElementById("course-lessons-list"),
  courseProgressPercent: document.getElementById("course-progress-percent"),

  // Teach page
  becomeInstructorBtn: document.getElementById("become-instructor-btn"),

  // Modals
  loginModal: document.getElementById("login-modal"),
  closeLoginModal: document.getElementById("close-login-modal"),
  loginForm: document.getElementById("login-form"),
  loginEmail: document.getElementById("login-email"),
  loginPassword: document.getElementById("login-password"),
  loginError: document.getElementById("login-error"),
  loginSubmitBtn: document.getElementById("login-submit-btn"),
  cancelLoginBtn: document.getElementById("cancel-login-btn"),
  showRegisterBtn: document.getElementById("show-register-btn"),

  registerModal: document.getElementById("register-modal"),
  closeRegisterModal: document.getElementById("close-register-modal"),
  registerForm: document.getElementById("register-form"),
  registerName: document.getElementById("register-name"),
  registerEmail: document.getElementById("register-email"),
  registerPassword: document.getElementById("register-password"),
  registerError: document.getElementById("register-error"),
  registerSubmitBtn: document.getElementById("register-submit-btn"),
  cancelRegisterBtn: document.getElementById("cancel-register-btn"),
  showLoginBtn: document.getElementById("show-login-btn"),

  instructorModal: document.getElementById("instructor-modal"),
  closeInstructorModal: document.getElementById("close-instructor-modal"),
  instructorForm: document.getElementById("instructor-form"),
  instructorName: document.getElementById("instructor-name"),
  instructorEmail: document.getElementById("instructor-email"),
  instructorExperience: document.getElementById("instructor-experience"),
  instructorMessage: document.getElementById("instructor-message"),
  instructorSubmitBtn: document.getElementById("instructor-submit-btn"),
  cancelInstructorBtn: document.getElementById("cancel-instructor-btn"),

  // Welcome message
  welcomeMessage: document.getElementById("welcome-message"),
  welcomeTitle: document.getElementById("welcome-title"),
  welcomeText: document.getElementById("welcome-text"),
  welcomeHint: document.getElementById("welcome-hint"),
  closeWelcomeMessage: document.getElementById("close-welcome-message"),
  

  
};



// Funciones helper
function formatPrice(price) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES");
}

// Función para mostrar páginas
function showPage(page) {
  // Oculta todas las páginas
  elements.homePage.classList.add("hidden");
  elements.courseDetailPage.classList.add("hidden");
  elements.cartPage.classList.add("hidden");
  elements.profilePage.classList.add("hidden");
  elements.myCoursesPage.classList.add("hidden");
  elements.courseLearningPage.classList.add("hidden");
  elements.teachPage.classList.add("hidden");

  // Muestra la página seleccionada
  switch (page) {
    case "home":
      elements.homePage.classList.remove("hidden");
      renderCourses();
      break;
    case "course-detail":
      elements.courseDetailPage.classList.remove("hidden");
      renderCourseDetail();
      break;
    case "cart":
      elements.cartPage.classList.remove("hidden");
      renderCart();
      break;
    case "profile":
      elements.profilePage.classList.remove("hidden");
      renderProfile();
      break;
    case "my-courses":
      elements.myCoursesPage.classList.remove("hidden");
      renderMyCourses();
      break;
    case "course-learning":
      elements.courseLearningPage.classList.remove("hidden");
      renderCourseLearning();
      break;
    case "teach":
      elements.teachPage.classList.remove("hidden");
      break;
  }
}

function updateAuthUI() {
  if (state.user) {
    elements.authButtons.classList.add("hidden");
    elements.userMenu.classList.remove("hidden");
    elements.username.textContent = state.user.name;
  } else {
    elements.authButtons.classList.remove("hidden");
    elements.userMenu.classList.add("hidden");
  }

  // Mostrar u ocultar badge del carrito siempre, sin importar login
  elements.cartBadge.textContent = state.cart.length;
  if (state.cart.length > 0) {
    elements.cartBadge.classList.remove("hidden");
  } else {
    elements.cartBadge.classList.add("hidden");
  }
}

// Funciones de renderizado

async function renderCourses() {
  elements.coursesGrid.innerHTML = "";
  const courses = await fetchCourses();
  
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "card group hover:shadow-lg transition-shadow duration-300";
    courseCard.innerHTML = `
      <div class="card-header p-0">
        <div class="relative overflow-hidden rounded-t-lg">
          <img src="${course.imageUrl}" alt="${course.title}" class="course-img group-hover:scale-105 transition-transform duration-300">
          <div class="course-level">
            <span class="badge badge-secondary">${course.level}</span>
          </div>
        </div>
      </div>
      <div class="card-content p-4">
        <h3 class="course-title group-hover:text-blue-600 cursor-pointer">${course.title}</h3>
        <p class="course-instructor">Por ${course.instructor.fullName}</p>
        <div class="course-meta">
          <div class="course-meta-item">
            <i class="fas fa-star text-yellow-400"></i>
            <span>${course.rating}</span>
          </div>
          <div class="course-meta-item">
            <i class="fas fa-users"></i>
            <span>${course.studentsCount.toLocaleString()}</span>
          </div>
          <div class="course-meta-item">
            <i class="fas fa-clock"></i>
            <span>${course.duration}</span>
          </div>
        </div>
        <div class="course-price">
          <div class="flex items-center space-x-2">
            <span class="current-price">${formatPrice(course.price)}</span>
            <span class="original-price">${formatPrice(course.originalPrice)}</span>
          </div>
        </div>
      </div>
      <div class="card-footer p-4 pt-0">
        <button class="btn ${state.purchasedCourses.some(c => c.id === course.id) ? "btn-disabled" : "btn-primary"} w-full add-to-cart-btn" data-id="${course.id}" ${state.purchasedCourses.some(c => c.id === course.id) ? "disabled" : ""}>
          ${state.purchasedCourses.some(c => c.id === course.id) ? "Ya comprado" : state.cart.some(c => c.id === course.id) ? "En el carrito" : "Agregar al carrito"}
        </button>
      </div>
    `;
    elements.coursesGrid.appendChild(courseCard);

    // Añade event listeners
    const titleEl = courseCard.querySelector(".course-title");
    titleEl.addEventListener("click", () => {
      state.selectedCourse = course;
      state.currentPage = "course-detail";
      showPage("course-detail");
    });

    const addToCartBtn = courseCard.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(course);
    });
  });
}

async function renderCourseDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  let courseId = urlParams.get("id");

  // Si no hay ID en la URL, intenta usar el ID del curso seleccionado
  if (!courseId && state.selectedCourse?.id) {
    courseId = state.selectedCourse.id;
  }

  if (!courseId) {
    alert("No se encontró el ID del curso.");
    return;
  }

  let course;

  try {
    const res = await fetch(`/api/courses/${courseId}/public`);
    if (!res.ok) throw new Error("No se pudo obtener el curso.");
    course = await res.json();
  } catch (err) {
    alert("Error al cargar el curso.");
    return;
  }

  state.selectedCourse = course;

  elements.courseDetailImage.src = course.imageUrl.startsWith("/")
    ? course.imageUrl
    : "/" + course.imageUrl;
  elements.courseDetailImage.alt = course.title;

  elements.courseDetailTitle.textContent = course.title;
  elements.courseDetailDescription.textContent = course.description;
  elements.courseDetailPrice.textContent = formatPrice(course.price);
  elements.courseDetailOriginalPrice.textContent = formatPrice(course.originalPrice);

  elements.courseDetailMeta.innerHTML = `
    <div class="course-detail-meta-item">
      <i class="fas fa-star text-yellow-400"></i>
      <span class="font-semibold">${course.rating}</span>
    </div>
    <div class="course-detail-meta-item">
      <i class="fas fa-users"></i>
      <span>${course.studentsCount.toLocaleString()} estudiantes</span>
    </div>
    <div class="course-detail-meta-item">
      <i class="fas fa-clock"></i>
      <span>${course.duration}</span>
    </div>
    <span class="badge">${course.level}</span>
  `;
  
  const avatarUrl = course.instructor.avatarUrl || "/img/instructor-Maria.jpg"; // usa la imagen por defecto si está vacío
  elements.instructorAvatar.innerHTML = `
  <img src="${avatarUrl}" alt="${course.instructor.fullName}" class="avatar-img">
  `;

  elements.instructorName.textContent = course.instructor.fullName;
  elements.instructorRole.textContent = "Instructor";
  elements.instructorBio.textContent = course.instructor.bio || "Instructor en Zsudra";

  elements.courseContentMeta.textContent = `${course.lessons.length} lecciones • ${course.duration} de contenido`;

  elements.lessonList.innerHTML = "";
  course.lessons.forEach((lesson, index) => {
    const lessonItem = document.createElement("div");
    lessonItem.className = "lesson-item";
    lessonItem.innerHTML = `
      <div class="lesson-content">
        <div class="lesson-left">
          <div class="lesson-icon">
            <i class="fas fa-lock text-gray-400"></i>
          </div>
          <div>
            <h4 class="lesson-title">${lesson.title}</h4>
            <p class="lesson-number">Lección ${index + 1}</p>
          </div>
        </div>
        <div class="lesson-duration">${lesson.duration}</div>
      </div>
    `;
    elements.lessonList.appendChild(lessonItem);
  });

  const isPurchased = state.purchasedCourses?.some(c => c.id === course.id);
  const isInCart = state.cart?.some(c => c.id === course.id);

  if (!state.user) {
    elements.buyNowBtn.textContent = "Inicia sesión para comprar";
    elements.buyNowBtn.disabled = true;
    elements.buyNowBtn.classList.add("btn-disabled");
    elements.addToCartBtn.style.display = "none";
  } else if (isPurchased) {
    elements.buyNowBtn.textContent = "Ya comprado";
    elements.buyNowBtn.disabled = true;
    elements.buyNowBtn.classList.add("btn-disabled");
    elements.addToCartBtn.textContent = "Ya comprado";
    elements.addToCartBtn.disabled = true;
    elements.addToCartBtn.classList.add("btn-disabled");
  } else if (isInCart) {
    elements.buyNowBtn.textContent = "Comprar ahora";
    elements.buyNowBtn.disabled = false;
    elements.addToCartBtn.textContent = "En el carrito";
    elements.addToCartBtn.disabled = true;
    elements.addToCartBtn.classList.add("btn-disabled");
  } else {
    elements.buyNowBtn.textContent = "Comprar ahora";
    elements.buyNowBtn.disabled = false;
    elements.addToCartBtn.textContent = "Agregar al carrito";
    elements.addToCartBtn.disabled = false;
  }
}


function renderProfile() {
  if (!state.user) {
    return;
  }

  // Set profile info
  elements.profileAvatar.innerHTML = `
    <img src="https://via.placeholder.com/80" alt="${state.user.name}" class="profile-avatar-img">
  `;
  elements.profileName.textContent = state.user.name;
  elements.profileEmail.textContent = state.user.email;
  elements.profileJoinDate.textContent = `Miembro desde ${state.user.joinDate}`;

  // Set form values
  elements.profileNameInput.value = state.profileForm.name;
  elements.profileEmailInput.value = state.profileForm.email;
  elements.profilePasswordInput.value = state.profileForm.password;

  // Clear update message
  elements.profileUpdateMessage.textContent = "";
  elements.profileUpdateMessage.classList.add("hidden");
}

function renderMyCourses() {
  if (!state.user) return;

  if (state.purchasedCourses.length === 0) {
    elements.myCoursesEmpty.classList.remove("hidden");
    elements.myCoursesContent.classList.add("hidden");
    return;
  }

  elements.myCoursesEmpty.classList.add("hidden");
  elements.myCoursesContent.classList.remove("hidden");

  elements.myCoursesGrid.innerHTML = "";

  state.purchasedCourses.forEach((course) => {
    const imageUrl = course.imageUrl?.startsWith("/") ? course.imageUrl : "/" + course.imageUrl;
    const instructorName = course.instructor?.fullName || "Instructor";
    const purchaseDate = course.purchaseDate
      ? new Date(course.purchaseDate).toLocaleDateString()
      : "Fecha desconocida";

    const courseCard = document.createElement("div");
    courseCard.className = "card";
    courseCard.innerHTML = `
      <div class="card-header p-0">
        <img src="${imageUrl}" alt="${course.title}" class="my-course-img">
      </div>
      <div class="card-content p-4">
        <h3 class="my-course-title">${course.title}</h3>
        <p class="my-course-instructor">Por ${instructorName}</p>
        <p class="my-course-date">Comprado el ${purchaseDate}</p>
        <div class="my-course-actions">
          <button class="btn btn-primary w-full continue-learning-btn" data-id="${course.id}">
            <i class="fas fa-play mr-2"></i>
            Continuar aprendiendo
          </button>
          <button class="btn btn-outline w-full request-refund-btn" data-id="${course.id}">
            Solicitar reembolso
          </button>
        </div>
      </div>
    `;

    elements.myCoursesGrid.appendChild(courseCard);

    const continueBtn = courseCard.querySelector(".continue-learning-btn");
    continueBtn.addEventListener("click", () => {
      state.currentLearningCourse = course;
      state.currentPage = "course-learning";
      showPage("course-learning");
    });

    const refundBtn = courseCard.querySelector(".request-refund-btn");
    refundBtn.addEventListener("click", () => {
      requestRefund(course.id);
    });
  });
}



function convertToEmbedUrl(url) {
  if (!url || typeof url !== "string") return "";

  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/
  );

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }

  return "";
}


function renderCourseLearning() {
  if (!state.currentLearningCourse) return;

  const course = state.currentLearningCourse;
  const lessons = course.lessons;
  const courseId = course.id;

  if (!state.courseProgress[courseId]) {
    state.courseProgress[courseId] = {
      currentLesson: 0,
      completedLessons: [],
    };
  }

  const currentProgress = state.courseProgress[courseId];
  const currentLesson = lessons[currentProgress.currentLesson];

  const videoPlayer = document.getElementById("video-player");
  const youtubeIframe = document.getElementById("youtube-player");
  const videoPlaceholder = document.getElementById("video-placeholder");
  const descContainer = document.getElementById("lesson-description");
  const descText = document.getElementById("lesson-description-text");

  elements.learningCourseTitle.textContent = course.title;
  elements.learningCourseInstructor.textContent = `Por ${course.instructor.fullName || course.instructor}`;

  if (currentLesson) {
    console.log("URL de la lección:", currentLesson.videoUrl);
    const embedUrl = convertToEmbedUrl(currentLesson.videoUrl);
    console.log("URL embed:", embedUrl);

    elements.currentLessonTitle.textContent = currentLesson.title;
    elements.currentLessonFullTitle.textContent = `Lección ${currentProgress.currentLesson + 1}: ${currentLesson.title}`;
    elements.currentLessonDuration.textContent = `Duración: ${currentLesson.duration}`;

    if (embedUrl) {
      youtubeIframe.src = embedUrl;
      videoPlayer.classList.remove("hidden");
      videoPlaceholder.classList.add("hidden");

      descText.textContent = currentLesson.description;
      descContainer.classList.remove("hidden");
    } else {
      youtubeIframe.src = "";
      videoPlayer.classList.remove("hidden");
      videoPlaceholder.classList.remove("hidden");
      descContainer.classList.add("hidden");
    }
  } else {
    elements.currentLessonTitle.textContent = "Selecciona una lección";
    elements.currentLessonFullTitle.textContent = "";
    elements.currentLessonDuration.textContent = "";
    youtubeIframe.src = "";
    videoPlayer.classList.add("hidden");
    videoPlaceholder.classList.remove("hidden");
    descContainer.classList.add("hidden");
  }

  const progress = Math.round(
    (currentProgress.completedLessons.length / lessons.length) * 100
  );
  elements.progressText.textContent = `${currentProgress.completedLessons.length} de ${lessons.length} lecciones completadas`;
  elements.progressPercent.textContent = `${progress}%`;
  elements.progressFill.style.width = `${progress}%`;
  elements.courseProgressPercent.textContent = `${progress}%`;

  if (currentProgress.completedLessons.includes(currentProgress.currentLesson)) {
    elements.markCompleteBtn.innerHTML = '<i class="fas fa-check mr-2"></i>✓ Completada';
    elements.markCompleteBtn.classList.add("btn-disabled");
    elements.markCompleteBtn.disabled = true;
  } else {
    elements.markCompleteBtn.innerHTML = "Marcar como completada";
    elements.markCompleteBtn.classList.remove("btn-disabled");
    elements.markCompleteBtn.disabled = false;
  }

  elements.nextLessonBtn.classList.toggle(
    "hidden",
    currentProgress.currentLesson >= lessons.length - 1
  );

  elements.courseLessonsList.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const lessonItem = document.createElement("div");
    let lessonClass = "course-learning-lesson";
    let numberClass = "course-learning-lesson-number";

    if (currentProgress.currentLesson === index) {
      lessonClass += " active";
      numberClass += " active";
    } else if (currentProgress.completedLessons.includes(index)) {
      lessonClass += " completed";
      numberClass += " completed";
    } else {
      numberClass += " default";
    }

    lessonItem.className = lessonClass;
    lessonItem.dataset.index = index;
    lessonItem.innerHTML = `
      <div class="course-learning-lesson-content">
        <div class="course-learning-lesson-left">
          <div class="${numberClass}">
            ${currentProgress.completedLessons.includes(index) ? "✓" : index + 1}
          </div>
          <div class="course-learning-lesson-info">
            <h4 class="course-learning-lesson-name ${
              currentProgress.currentLesson === index ? "active" : ""
            }">${lesson.title}</h4>
            <p class="course-learning-lesson-duration">${lesson.duration}</p>
          </div>
        </div>
        ${currentProgress.currentLesson === index ? '<i class="fas fa-play text-blue-500"></i>' : ""}
      </div>
      ${
        currentProgress.completedLessons.includes(index)
          ? '<div class="course-learning-lesson-status completed">Completada</div>'
          : ""
      }
      ${
        currentProgress.currentLesson === index &&
        !currentProgress.completedLessons.includes(index)
          ? '<div class="course-learning-lesson-status active">Reproduciendo ahora</div>'
          : ""
      }
    `;
    elements.courseLessonsList.appendChild(lessonItem);

    lessonItem.addEventListener("click", () => {
      state.courseProgress[courseId].currentLesson = index;
      renderCourseLearning();
    });
  });
}



async function purchaseCourse(course) {
  if (!state.user) {
    state.showLoginModal = true;
    updateLoginModal();
    return;
  }

  try {
    const response = await fetch(`/api/courses/${course.id}/purchase`, {
      method: 'POST',
      credentials: 'include' // ⬅️ Usa sesión en vez de Authorization
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al comprar el curso');
    }

    const purchase = await response.json();
    state.purchasedCourses = [...state.purchasedCourses, course];
    removeFromCart(course.id);
    showWelcomeMessage(`¡Curso "${course.title}" comprado exitosamente!`, "success");

    if (state.currentPage === "my-courses") {
      renderMyCourses();
    }
  } catch (error) {
    showWelcomeMessage(error.message, "error");
  }
}


async function purchaseCart() {
  if (!state.user) return;

  try {
    const purchasePromises = state.cart.map(course => 
      fetch(`/api/courses/${course.id}/purchase`, {
        method: 'POST',
        credentials: 'include' // ⬅️ necesario para enviar cookie de sesión
      })
    );

    const responses = await Promise.all(purchasePromises);
    const errors = responses.filter(r => !r.ok);
    
    if (errors.length > 0) {
      throw new Error('Error al comprar algunos cursos');
    }

    // Actualizar lista de cursos comprados
    await fetchPurchasedCourses();
    
    state.cart = [];
    updateAuthUI();
    renderCart();
    showPage("my-courses");
    showWelcomeMessage(`¡${purchasePromises.length} cursos comprados exitosamente!`, "success");
  } catch (error) {
    showWelcomeMessage(error.message, "error");
  }
}


function requestRefund(courseId) {
  state.purchasedCourses = state.purchasedCourses.filter(
    (course) => course.id !== courseId
  );
  renderMyCourses();
  showWelcomeMessage("Reembolso solicitado exitosamente", "success");
}

function markLessonComplete(lessonIndex) {
  if (!state.currentLearningCourse) return;

  const courseId = state.currentLearningCourse.id;

  // Inicializar el progreso del curso si no existe
  if (!state.courseProgress[courseId]) {
    state.courseProgress[courseId] = {
      currentLesson: 0,
      completedLessons: [],
    };
  }

  // Marcar la lección como completada si no lo está ya
  if (!state.courseProgress[courseId].completedLessons.includes(lessonIndex)) {
    state.courseProgress[courseId].completedLessons = [
      ...state.courseProgress[courseId].completedLessons,
      lessonIndex,
    ];
    renderCourseLearning();
  }
}
async function handleRegister(e) {
  e.preventDefault();
  state.registerError = "";
  state.isRegistering = true;
  updateRegisterUI();

  const fullName = elements.registerName.value;
  const email = elements.registerEmail.value;
  const password = elements.registerPassword.value;

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
        fullName,
        username: email.split("@")[0]
      })
    });

    if (!response.ok) {
      throw new Error('Error al registrar. El correo ya está en uso.');
    }

    // ⬇️ Luego del registro, realizar login automáticamente
    const loginResponse = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (!loginResponse.ok) {
      throw new Error("Registro exitoso, pero fallo el login automático.");
    }

    const meRes = await fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include'
    });

    if (!meRes.ok) throw new Error("No se pudo obtener el usuario");

    const user = await meRes.json();
    state.user = {
      name: user.fullName,
      email: user.email,
      avatar: user.avatarUrl || "https://via.placeholder.com/80",
      joinDate: new Date(user.joinDate).toLocaleDateString("es-ES")
    };

    localStorage.setItem("zsudra_user", JSON.stringify(state.user));
    await fetchPurchasedCourses();
    updateAuthUI();

    state.welcomeMessage = `¡Registro exitoso! Bienvenido, ${user.fullName}!`;
    state.showRegisterModal = false;
    showWelcomeMessage(state.welcomeMessage, "success");
  } catch (error) {
    state.registerError = error.message;
  } finally {
    state.isRegistering = false;
    updateRegisterUI();
  }
}
async function handleLogin(e) {
  e.preventDefault();
  state.loginError = "";
  state.isLoggingIn = true;
  updateLoginUI();

  const email = elements.loginEmail.value;
  const password = elements.loginPassword.value;

  try {
    // 👇 Spring Security espera username, no email
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include", // 🔐 importante para mantener sesión
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    if (!res.ok) {
      throw new Error("Correo o contraseña incorrectos");
    }

    // ✅ Obtener los datos del usuario autenticado
    const meRes = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include"
    });

    if (!meRes.ok) {
      throw new Error("No se pudo obtener el usuario autenticado");
    }

    const user = await meRes.json();

    state.user = {
      name: user.fullName,
      email: user.email,
      avatar: user.avatarUrl || "https://via.placeholder.com/80",
      joinDate: new Date(user.joinDate).toLocaleDateString("es-ES")
    };

    localStorage.setItem("zsudra_user", JSON.stringify(state.user));

    await fetchPurchasedCourses();
    updateAuthUI();

    state.welcomeMessage = `¡Bienvenido de nuevo, ${user.fullName}!`;
    state.showLoginModal = false;
    updateLoginModal();
    showWelcomeMessage(state.welcomeMessage, "success");

  } catch (error) {
    state.loginError = error.message;
  } finally {
    state.isLoggingIn = false;
    updateLoginUI();
  }
}




async function logout() {
  try {
    await fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include"
    });
  } catch (err) {
    console.warn("Error al cerrar sesión:", err);
  }

  state.user = null;
  state.cart = [];
  state.purchasedCourses = [];
  state.currentLearningCourse = null;
  state.courseProgress = {};
  state.welcomeMessage = "";

  localStorage.removeItem("zsudra_user");

  updateAuthUI();
  showPage("home");
}



async function fetchCourses() {
  try {
    const response = await fetch('/api/courses');

    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType.includes("application/json")) {
      throw new Error("Respuesta inválida del servidor");
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener cursos:', error);
    return [];
  }
}


// Función para obtener cursos comprados por el usuario
async function fetchPurchasedCourses() {
  try {
    const res = await fetch("/api/courses/my-courses", {
      credentials: "include", // ✅ envía la cookie de sesión
    });

    if (!res.ok) {
      throw new Error("Error al obtener cursos comprados");
    }

    state.purchasedCourses = await res.json();
  } catch (err) {
    console.error("❌ Error al obtener cursos comprados:", err);
    state.purchasedCourses = [];
  }
}



// Función para obtener el progreso de un curso
async function fetchCourseProgress(courseId) {
  if (!state.user) return null;

  try {
    const response = await fetch(`/api/courses/${courseId}/progress`, {
      credentials: 'include' // ⬅️ Enviar cookies de sesión
    });

    if (!response.ok) throw new Error('Error al obtener progreso');

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


async function handleProfileUpdate(e) {
  e.preventDefault();
  state.isUpdatingProfile = true;
  state.profileUpdateMessage = "";
  updateProfileUI();

  const name = elements.profileNameInput.value;
  const email = elements.profileEmailInput.value;
  const password = elements.profilePasswordInput.value;

  try {
    const response = await fetch('/api/users/me', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // ⬅️ Enviar cookies de sesión
      body: JSON.stringify({
        email,
        fullName: name,
        newPassword: password
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al actualizar perfil');
    }

    const updatedUser = await response.json();
    state.user = {
      name: updatedUser.fullName,
      email: updatedUser.email,
      avatar: updatedUser.avatarUrl || "https://via.placeholder.com/80",
      joinDate: new Date(updatedUser.joinDate).toLocaleDateString("es-ES")
    };

    state.profileUpdateMessage = "¡Perfil actualizado exitosamente!";
    showWelcomeMessage(state.profileUpdateMessage, "success");
  } catch (error) {
    state.profileUpdateMessage = error.message;
  } finally {
    state.isUpdatingProfile = false;
    updateProfileUI();
  }
}



async function handleInstructorSubmit(e) {
  e.preventDefault();
  state.isSubmittingInstructor = true;
  state.instructorSubmitMessage = "";
  updateInstructorUI();

  const name = elements.instructorName.value;
  const email = elements.instructorEmail.value;
  const experience = elements.instructorExperience.value;

  try {
    const response = await fetch('/api/instructors/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        experience
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al enviar solicitud');
    }

    state.instructorSubmitMessage = "¡Postulación enviada exitosamente! Te contactaremos pronto.";
    showWelcomeMessage(state.instructorSubmitMessage, "success");
    
    // Limpiar formulario
    elements.instructorName.value = "";
    elements.instructorEmail.value = "";
    elements.instructorExperience.value = "";
  } catch (error) {
    state.instructorSubmitMessage = error.message;
  } finally {
    state.isSubmittingInstructor = false;
    updateInstructorUI();
  }
}

// UI update functions
function updateLoginUI() {
  elements.loginError.textContent = state.loginError;
  if (state.loginError) {
    elements.loginError.classList.remove("hidden");
  } else {
    elements.loginError.classList.add("hidden");
  }

  if (state.isLoggingIn) {
    elements.loginSubmitBtn.disabled = true;
    elements.loginSubmitBtn.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="spinner"></div>
        <span>Iniciando sesión...</span>
      </div>
    `;
  } else {
    elements.loginSubmitBtn.disabled = false;
    elements.loginSubmitBtn.textContent = "Iniciar sesión";
  }
}

function updateRegisterUI() {
  elements.registerError.textContent = state.registerError;
  if (state.registerError) {
    elements.registerError.classList.remove("hidden");
  } else {
    elements.registerError.classList.add("hidden");
  }

  if (state.isRegistering) {
    elements.registerSubmitBtn.disabled = true;
    elements.registerSubmitBtn.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="spinner"></div>
        <span>Creando cuenta...</span>
      </div>
    `;
  } else {
    elements.registerSubmitBtn.disabled = false;
    elements.registerSubmitBtn.textContent = "Crear cuenta";
  }
}

function updateProfileUI() {
  elements.profileUpdateMessage.textContent = state.profileUpdateMessage;
  if (state.profileUpdateMessage) {
    elements.profileUpdateMessage.classList.remove("hidden");
  } else {
    elements.profileUpdateMessage.classList.add("hidden");
  }

  if (state.isUpdatingProfile) {
    elements.updateProfileBtn.disabled = true;
    elements.updateProfileBtn.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="spinner"></div>
        <span>Actualizando...</span>
      </div>
    `;
  } else {
    elements.updateProfileBtn.disabled = false;
    elements.updateProfileBtn.textContent = "Actualizar Perfil";
  }
}

function updateInstructorUI() {
  elements.instructorMessage.textContent = state.instructorSubmitMessage;
  if (state.instructorSubmitMessage) {
    elements.instructorMessage.classList.remove("hidden");
    if (state.instructorSubmitMessage.includes("exitosamente")) {
      elements.instructorMessage.classList.remove("text-red-600");
      elements.instructorMessage.classList.add("text-green-600");
    } else {
      elements.instructorMessage.classList.add("text-red-600");
      elements.instructorMessage.classList.remove("text-green-600");
    }
  } else {
    elements.instructorMessage.classList.add("hidden");
  }

  if (state.isSubmittingInstructor) {
    elements.instructorSubmitBtn.disabled = true;
    elements.instructorSubmitBtn.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="spinner"></div>
        <span>Enviando...</span>
      </div>
    `;
  } else {
    elements.instructorSubmitBtn.disabled = false;
    elements.instructorSubmitBtn.textContent = "Enviar postulación";
  }
}

function showWelcomeMessage(message, type = "success") {
  state.welcomeMessage = message;
  elements.welcomeTitle.textContent =
    type === "success" ? "¡Éxito!" : "Información";
  elements.welcomeText.textContent = message;
  elements.welcomeMessage.classList.remove("hidden");

  // Establecer color según el tipo de mensaje
  if (type === "success") {
    elements.welcomeMessage.style.background =
      "linear-gradient(to right, var(--green-500), var(--green-600))";
  } else if (type === "info") {
    elements.welcomeMessage.style.background =
      "linear-gradient(to right, var(--blue-500), var(--blue-600))";
  } else if (type === "error") {
    elements.welcomeMessage.style.background =
      "linear-gradient(to right, var(--red-500), var(--red-600))";
  }

  setTimeout(() => {
    elements.welcomeMessage.classList.add("hidden");
  }, 5000);
}

function updateWelcomeMessage() {
  if (state.welcomeMessage) {
    showWelcomeMessage(state.welcomeMessage);
  } else {
    elements.welcomeMessage.classList.add("hidden");
  }
}

function updateLoginModal() {
  if (state.showLoginModal) {
    elements.loginModal.classList.remove("hidden");
  } else {
    elements.loginModal.classList.add("hidden");
    elements.loginEmail.value = "";
    elements.loginPassword.value = "";
    state.loginError = "";
    updateLoginUI();
  }
}

function updateRegisterModal() {
  if (state.showRegisterModal) {
    elements.registerModal.classList.remove("hidden");
  } else {
    elements.registerModal.classList.add("hidden");
    elements.registerName.value = "";
    elements.registerEmail.value = "";
    elements.registerPassword.value = "";
    state.registerError = "";
    updateRegisterUI();
  }
}

function updateInstructorModal() {
  if (state.showInstructorModal) {
    elements.instructorModal.classList.remove("hidden");
  } else {
    elements.instructorModal.classList.add("hidden");
  }
}

// Configuración de event listeners
function setupEventListeners() {
  // Navegación del header
  elements.logoBtn.addEventListener("click", () => {
    state.currentPage = "home";
    showPage("home");
  });

  elements.coursesBtn.addEventListener("click", () => {
    state.currentPage = "home";
    showPage("home");
  });

  elements.myCoursesBtn.addEventListener("click", () => {
    if (state.user) {
      state.currentPage = "my-courses";
      showPage("my-courses");
    } else {
      state.showLoginModal = true;
      updateLoginModal();
    }
  });

  elements.teachBtn.addEventListener("click", () => {
    state.currentPage = "teach";
    showPage("teach");
  });

  elements.cartBtn.addEventListener("click", () => {
    state.currentPage = "cart";
    showPage("cart");
  });

  elements.profileBtn.addEventListener("click", () => {
    state.currentPage = "profile";
    showPage("profile");
  });

  elements.logoutBtn.addEventListener("click", logout);

  // Botones de autenticación
  elements.loginBtn.addEventListener("click", () => {
    state.showLoginModal = true;
    updateLoginModal();
  });

  elements.registerBtn.addEventListener("click", () => {
    state.showRegisterModal = true;
    updateRegisterModal();
  });

  // Página de detalle de curso
  elements.buyNowBtn.addEventListener("click", () => {
    if (state.user) {
      purchaseCourse(state.selectedCourse);
      state.currentPage = "my-courses";
      showPage("my-courses");
    } else {
      state.showLoginModal = true;
      updateLoginModal();
    }
  });

  elements.addToCartBtn.addEventListener("click", () => {
    addToCart(state.selectedCourse);
  });

  // Cart page
  elements.exploreCoursesBtn.addEventListener("click", () => {
    state.currentPage = "home";
    showPage("home");
  });

  elements.purchaseCartBtn.addEventListener("click", () => {
    if (state.user) {
      purchaseCart();
    }
  });
elements.purchaseCartBtn.addEventListener("click", () => {
  if (state.user) {
    purchaseCartCourses(); // Esta sí será la función correcta
  } else {
    showWelcomeMessage("Debes iniciar sesión para comprar.", "error");
  }
});


  // ✅ Aquí agregas los formularios de login y registro
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.registerForm.addEventListener("submit", handleRegister);
}


  // Profile page
  elements.profileForm.addEventListener("submit", handleProfileUpdate);

  // My courses page
  elements.exploreMyCoursesBtn.addEventListener("click", () => {
    state.currentPage = "home";
    showPage("home");
  });

  // Course learning page
  elements.backToMyCoursesBtn.addEventListener("click", () => {
    state.currentPage = "my-courses";
    showPage("my-courses");
  });

  elements.backToCoursesBtn.addEventListener("click", () => {
    state.currentPage = "home";
    showPage("home");
  });

  elements.markCompleteBtn.addEventListener("click", () => {
    if (
      state.currentLearningCourse &&
      state.courseProgress[state.currentLearningCourse.id]
    ) {
      const currentLesson =
        state.courseProgress[state.currentLearningCourse.id].currentLesson;
      markLessonComplete(currentLesson);
    }
  });

  elements.nextLessonBtn.addEventListener("click", () => {
    if (
      state.currentLearningCourse &&
      state.courseProgress[state.currentLearningCourse.id]
    ) {
      state.courseProgress[state.currentLearningCourse.id].currentLesson++;
      renderCourseLearning();
    }
  });

  // Teach page
  elements.becomeInstructorBtn.addEventListener("click", () => {
    state.showInstructorModal = true;
    updateInstructorModal();
  });

  // Modals
  elements.closeLoginModal.addEventListener("click", () => {
    state.showLoginModal = false;
    updateLoginModal();
  });

  elements.cancelLoginBtn.addEventListener("click", () => {
    state.showLoginModal = false;
    updateLoginModal();
  });

  elements.showRegisterBtn.addEventListener("click", () => {
    state.showLoginModal = false;
    state.showRegisterModal = true;
    updateLoginModal();
    updateRegisterModal();
  });

  elements.loginForm.addEventListener("submit", handleLogin);

  elements.closeRegisterModal.addEventListener("click", () => {
    state.showRegisterModal = false;
    updateRegisterModal();
  });

  elements.cancelRegisterBtn.addEventListener("click", () => {
    state.showRegisterModal = false;
    updateRegisterModal();
  });

  elements.showLoginBtn.addEventListener("click", () => {
    state.showRegisterModal = false;
    state.showLoginModal = true;
    updateRegisterModal();
    updateLoginModal();
  });

  elements.registerForm.addEventListener("submit", handleRegister);

  elements.closeInstructorModal.addEventListener("click", () => {
    state.showInstructorModal = false;
    updateInstructorModal();
  });

  elements.cancelInstructorBtn.addEventListener("click", () => {
    state.showInstructorModal = false;
    updateInstructorModal();
  });

  elements.instructorForm.addEventListener("submit", handleInstructorSubmit);

  // Welcome message
  elements.closeWelcomeMessage.addEventListener("click", () => {
    state.welcomeMessage = "";
    updateWelcomeMessage();
  });

async function init() {
  setupEventListeners();

  try {
    const res = await fetch("/api/auth/me", {
      credentials: "include" // ✅ importante para mantener sesión
    });

    if (res.ok) {
      const user = await res.json();
      state.user = {
        name: user.fullName,
        email: user.email,
        avatar: user.avatarUrl || "https://via.placeholder.com/80",
        joinDate: new Date(user.joinDate).toLocaleDateString("es-ES")
      };

      localStorage.setItem("zsudra_user", JSON.stringify(state.user));

      // ⬇️ Solo si hay usuario, carga cursos comprados
      await fetchPurchasedCourses();
    } else {
      state.user = null;
      localStorage.removeItem("zsudra_user");
    }
  } catch (err) {
    console.warn("⚠️ Error al validar sesión:", err);
    state.user = null;
    localStorage.removeItem("zsudra_user");
  }

  updateAuthUI();
  showPage(state.currentPage);
}


function addToCart(course) {
  if (state.purchasedCourses.find((item) => item.id === course.id)) {
    showWelcomeMessage("¡Ya compraste este curso!", "info");
    return;
  }

  if (!state.cart.find((item) => item.id === course.id)) {
    state.cart = [...state.cart, course];
    updateAuthUI();
    if (state.currentPage === "course-detail") {
      renderCourseDetail();
    } else if (state.currentPage === "cart") {
      renderCart();
    }
    showWelcomeMessage(`Curso "${course.title}" agregado al carrito`, "success");
  } else {
    showWelcomeMessage("Este curso ya está en tu carrito", "info");
  }
}

function renderCart() {
  if (state.cart.length === 0) {
    elements.cartEmpty.classList.remove("hidden");
    elements.cartContent.classList.add("hidden");
    return;
  }

  elements.cartEmpty.classList.add("hidden");
  elements.cartContent.classList.remove("hidden");

  // Renderizar los cursos en el carrito
  elements.cartItems.innerHTML = "";
  state.cart.forEach((course) => {
    const cartItem = document.createElement("div");
    cartItem.className = "card";
    cartItem.innerHTML = `
      <div class="card-content p-6">
        <div class="flex items-center space-x-4">
          <img src="${course.imageUrl}" alt="${course.title}" class="cart-item-img">
          <div class="cart-item-info">
            <h3 class="cart-item-title">${course.title}</h3>
            <p class="cart-item-instructor">Por ${course.instructor?.fullName || "Instructor"}</p>
            <div class="cart-item-rating">
              <i class="fas fa-star text-yellow-400"></i>
              <span>${course.rating}</span>
            </div>
          </div>
          <div class="cart-item-price">
            <p class="cart-item-price-value">${formatPrice(course.price)}</p>
            <button class="btn btn-outline btn-sm remove-from-cart-btn mt-2" data-id="${course.id}">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
    elements.cartItems.appendChild(cartItem);

    // Botón eliminar del carrito
    const removeBtn = cartItem.querySelector(".remove-from-cart-btn");
    removeBtn.addEventListener("click", () => {
      removeFromCart(course.id);
    });
  });

  // Calcular total
  const subtotal = state.cart.reduce((acc, c) => acc + c.price, 0);
  elements.cartSubtotal.textContent = formatPrice(subtotal);
  elements.cartTotal.textContent = formatPrice(subtotal);

  // Estado del botón comprar
  if (state.user) {
    elements.purchaseCartBtn.disabled = false;
    elements.purchaseCartBtn.classList.remove("btn-disabled");
    elements.loginRequiredMessage.classList.add("hidden");
  } else {
    elements.purchaseCartBtn.disabled = true;
    elements.purchaseCartBtn.classList.add("btn-disabled");
    elements.loginRequiredMessage.classList.remove("hidden");
  }
}
function removeFromCart(courseId) {
  state.cart = state.cart.filter(course => course.id !== courseId);
  updateAuthUI();
  renderCart();
  showWelcomeMessage("Curso eliminado del carrito", "info");
}

async function purchaseCartCourses() {
  if (!state.user) {
    showWelcomeMessage("Debes iniciar sesión para comprar.", "error");
    return;
  }

  for (const course of state.cart) {
    try {
      const res = await fetch(`/api/courses/${course.id}/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${state.user.email}:${state.user.password}`)}`
        }
      });

      if (!res.ok) throw new Error("Error al comprar curso");

      const purchased = await res.json();
      console.log("Curso comprado:", purchased);

      // Agregarlo a cursos comprados
      state.purchasedCourses.push(course);
    } catch (err) {
      console.error(`Error al comprar el curso "${course.title}":`, err);
    }
  }

  // Vaciar carrito después de comprar
  state.cart = [];
  updateAuthUI();
  renderCart();
  showWelcomeMessage("¡Compra completada!", "success");
}



// Inicia la aplicación
init();

