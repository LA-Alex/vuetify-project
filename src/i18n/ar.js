import Question from '@/pages/question.vue'
import { ar } from 'vuetify/locale'

export default {
  $vuetify: ar,
  nav: {
    save: 'حفظ',
    register: 'التسجيل',
    login: 'تسجيل الدخول',
    cart: 'السلة',
    orders: 'الطلبات',
    admin: 'إدارة',
    logout: 'تسجيل الخروج',
    adminProducts: 'إدارة المنتجات',
    adminOrders: 'إدارة الطلبات',
    home: 'الصفحة الرئيسية',
    product: 'منتج',
    shop: 'المتجر',
  },
  index: {
    start: 'ابدأ القراءة',
    discover: 'اكتشف المستقبل وحل ألغاز القلب',
    curious:
      'لمن يبحثون عن إجابات أو فضولهم يدفعهم لاستكشاف المستقبل. يقدم موقع "تاروت النور" قراءات دقيقة ومرشدة لحل مشكلات الحياة. الحب، اختيارات المهنة، اتجاهات الحياة، وغير ذلك الكثير من القراءات المتوافقة معك.',
    one: 'خدمة تاروت عبر الإنترنت',
    oneText:
      'مهما كنت في أي مكان، يوفر لك نظام التاروت الذكي إجابات فورية ودقيقة. إنه يدعم رحلتك في الحياة.',
    two: 'نظام سحب البطاقات الاحترافي',
    twoText:
      'استخدم نظام سحب البطاقات عبر الإنترنت لتشعر بطاقة وحكمة الذكاء الاصطناعي لتاروت، بناءً على البطاقات التي اخترتها. ابدأ رحلتك الداخلية.',
    three: 'منتجات مختارة',
    threeText: 'لقد اخترنا منتجات تتناغم مع طاقة الكون لمساعدتك في فتح أبواب طاقتك الخاصة.',
    four: 'امسك مفتاح القدر',
    fourText: 'كل سحب هو طريق لفهم الذات. اختر السحب الذي يناسبك.',
    help: 'هل تحتاج إلى خدمة أكثر احترافية؟',
    helpText: 'هل تحتاج إلى قراءة تاروت أكثر دقة؟ خبراؤنا في التاروت هنا لحل أسئلتك.',
    date: 'احجز قراءة تاروت',
  },
  register: {
    submit: 'إنشاء حساب',
    success: 'تم التسجيل بنجاح',
    text: 'التسجيل عبر البريد الإلكتروني',
    Hi: 'أهلاً وسهلاً',
    ext: 'التسجيل في موقع تاروت النور',
  },
  login: {
    login: 'تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور',
    success: 'تم تسجيل الدخول بنجاح',
    account: 'يرجى إدخال حسابك',
    password: 'يرجى إدخال كلمة المرور',
    welcome: 'مرحباً',
    to: 'إلى تاروت النور',
    ID: 'تسجيل الدخول باستخدام الحساب وكلمة المرور',
  },
  tarot: {
    index: 'رؤية المستقبل، النور يرشدك',
    one: 'بطاقة واحدة',
    three: 'ثلاث بطاقات',
    six: 'ست بطاقات',
    question: 'سؤالك',
    question2: 'سؤالك الداخلي',
    Keep: 'حفظ',
    web: 'تاروت النور',
    number: 'عدد البطاقات التي سيتم سحبها:',
    yourquestion: 'سؤالك:',
    draw_cards: 'اسحب {count} بطاقات',
    gotoaipage: 'الانتقال إلى صفحة القراءة الذكية',
    aipage: 'صفحة قراءة التاروت',
    open: 'افتح البطاقات',
    text: 'اختر البطاقة التي تستجيب لأكثر طاقتك',
    save: 'سؤال التاروت:',
    aiResponse: 'إجابة الذكاء الاصطناعي:',
    delete: 'حذف',
    maxRecordsError: 'تم الوصول إلى الحد الأقصى من السجلات (3 مرات). لا يمكن إضافة سجلات إضافية.',
  },
  choice: {
    title: 'اختيار السحب',
    one: 'بطاقة واحدة',
    yes: 'تأكيد',
    three: 'ثلاث بطاقات',
    five: 'خمس بطاقات',
    seven: 'سبع بطاقات',
    nine: 'تسع بطاقات',
    mine: 'سحب مخصص',
    years: 'سحب سنة الحياة',
    label: 'أدخل سؤالك',
  },
  logout: {
    success: 'تم تسجيل الخروج بنجاح',
  },
  user: {
    account: 'الحساب',
    email: 'يرجى إدخال بريدك الإلكتروني',
    password: 'كلمة المرور',
    passwordConfirm: 'تأكيد كلمة المرور',
  },
  cart: {
    checkout: 'الدفع',
    total: 'الإجمالي',
  },
  order: {
    createdAt: 'تاريخ الطلب',
    cart: 'منتج',
    price: 'مبلغ الطلب',
    account: 'حساب',
  },
  admin: {
    index: 'اختيار فئة الإدارة',
  },
  adminProduct: {
    new: 'إضافة منتج',
    edit: 'تعديل منتج',
    cancel: 'إلغاء',
    submit: 'تأكيد',
    newSuccess: 'تم الإضافة بنجاح',
    editSuccess: 'تم التعديل بنجاح',
  },
  product: {
    image: 'الصورة',
    name: 'الاسم',
    description: 'الوصف',
    price: 'السعر',
    category: 'الفئة',
    sell: 'بيع / إيقاف',
    createdAt: 'تاريخ الإضافة',
    updatedAt: 'تاريخ التعديل',
    onSell: 'معروض للبيع',
    notOnSell: 'غير معروض للبيع',
    addCart: 'أضف إلى السلة',
    addCartQuantityInvalid: 'الكمية غير صحيحة',
    addCartSuccess: 'تم إضافة المنتج إلى السلة بنجاح',
    introduce: 'مقدمة المنتج',
    maybe: 'قد يعجبك أيضاً',
  },
  productCategory: {
    food: 'بلورات',
    drink: 'إكسسوارات',
    music: 'زيوت أساسية',
    phone: 'أخرى',
  },
  fileAgent: {
    helpText: 'انقر أو اسحب الملفات هنا',
    errorType: 'نوع الملف غير صحيح',
    errorSize: 'حجم الملف يتجاوز الحد المسموح به',
  },
  api: {
    userAccountRequired: 'الحساب مطلوب',
    userAccountTooShort: 'الحساب قصير جداً',
    userAccountTooLong: 'الحساب طويل جداً',
    userAccountInvalid: 'تنسيق الحساب غير صحيح',
    userAccountDuplicate: 'الحساب موجود بالفعل',
    userPasswordRequired: 'كلمة المرور مطلوبة',
    userPasswordTooShort: 'كلمة المرور قصيرة جداً',
    userPasswordTooLong: 'كلمة المرور طويلة جداً',
    userPasswordIncorrect: 'كلمة المرور غير صحيحة',
    userPasswordNotMatch: 'كلمات المرور غير متطابقة',
    userEmailRequired: 'البريد الإلكتروني مطلوب',
    userEmailInvalid: 'تنسيق البريد الإلكتروني غير صحيح',
    userCartProductRequired: 'المنتج في السلة مطلوب',
    userCartQuantityRequired: 'الكمية في السلة مطلوبة',
    userCartQuantityTooSmall: 'الكمية في السلة غير صحيحة',
    userNotFound: 'المستخدم غير موجود',
    userPermissionDenied: 'تم رفض الإذن',
    userTokenInvalid: 'رمز المستخدم غير صحيح',
    userTokenExpired: 'انتهت الجلسة',
    productIdInvalid: 'معرف المنتج غير صحيح',
    productNameRequired: 'اسم المنتج مطلوب',
    productPriceRequired: 'سعر المنتج مطلوب',
    productPriceTooSmall: 'سعر المنتج غير صحيح',
    productImageRequired: 'صورة المنتج مطلوبة',
    productDescriptionRequired: 'وصف المنتج مطلوب',
    productCategoryRequired: 'فئة المنتج مطلوبة',
    productCategoryInvalid: 'فئة المنتج غير صحيحة',
    productSellRequired: 'حالة بيع المنتج مطلوبة',
    requestFormatError: 'تنسيق الطلب غير صحيح',
    productNotOnSell: 'المنتج غير معروض للبيع',
    productNotFound: 'المنتج غير موجود',
    orderCartProductRequired: 'المنتج في الطلب مطلوب',
    orderCartQuantityRequired: 'الكمية في الطلب مطلوبة',
    orderCartQuantityTooSmall: 'الكمية في الطلب غير صحيحة',
    orderUserRequired: 'المستخدم في الطلب مطلوب',
    orderCartRequired: 'سلة الطلب مطلوبة',
    orderCartEmpty: 'السلة فارغة',
    serverError: 'خطأ في الخادم',
    unknownError: 'خطأ غير معروف',
    uploadFailed: 'فشل في التحميل',
    api: 'فشل في التسجيل. يرجى إعادة الاتصال',
    succ: 'تم التسجيل بنجاح!',
    aiResponse: 'حدث خطأ. حاول لاحقاً',
  },
}
