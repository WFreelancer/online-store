if ('.main-sliders__body') {
	$(document).ready(function () {
		$('.main-sliders__body').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 300,
			infinite: true,
			initialSlide: 0,
			// autoplay: true,
			autoplaySpeed: 8000,
			dots: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {

					}

				},

			]

		});
	});
}

//слайдер товаров===============================================================================================================================================================

var $gallery = $('.product-slider__slick');
var slideCount = null;

$(document).ready(function () {
	if ($gallery) {
		$gallery.slick({
			// autoHeight: true,
			autoplay: false,
			appendArrows: $('.product-slider__navigation'),
			prevArrow: '<div class="arrow arrow__prev"></div>',
			nextArrow: '<div class="arrow arrow__next"></div>',
		});
	}

});

$gallery.on('init', function (event, slick) {
	slideCount = slick.slideCount;
	setSlideCount();
	setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	var $el = $('.product-slider__count').find('.total');
	$el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	var $el = $('.product-slider__count').find('.current');
	$el.text(currentSlide + 1);
}
//Brands-slide===============================================================================================================================================================
var $brands = $('.brands__body');
$(document).ready(function () {
	if ($brands) {
		$brands.slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 300,
			infinite: true,
			initialSlide: 0,
			autoplay: false,
			appendArrows: $('.brands__navigation'),
			prevArrow: '<div class="brands__arrow brands__arrow_prev arrow arrow__prev"></div>',
			nextArrow: '<div class="brands__arrow brands__arrow_next arrow arrow__next"></div>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}

				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
					}

				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}

				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
					}

				},


			]
		});
	}

});
//Картинки вставлялись в превью==============================================================================================================================================================

let sliderImages = document.querySelectorAll('.main-sliders__img');
let sliderDotts = document.querySelectorAll('.main-sliders__body .slick-dots li button');

for (let index = 0; index < sliderImages.length; index++) {
	const sliderImage = sliderImages[index].querySelector('img').getAttribute('src');

	// sliderDotts[index].style.backgroundImage = "url('" + sliderImage + "')";
}


//===============================================================================================================================================================
$(function () {
	let isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;

	if (isMobile) {
		let parentMenuLinks = document.querySelectorAll('.menu-page__parent>a');

		for (let index = 0; index < parentMenuLinks.length; index++) {
			const parentMenuLink = parentMenuLinks[index];
			parentMenuLink.addEventListener("click", function (e) {
				e.preventDefault();
				parentMenuLink.parentElement.classList.toggle('active');

			})
		}
	} else {
		let parentMenu = document.querySelectorAll('.menu-page__parent');

		for (let i = 0; i < parentMenu.length; i++) {
			let Iparentmenu = parentMenu[i];
			Iparentmenu.addEventListener('mouseenter', function (e) {
				Iparentmenu.classList.add('active');
			});
			Iparentmenu.addEventListener('mouseleave', function (e) {
				Iparentmenu.classList.remove('active');
			})
		};
	}
});
//===============================================================================================================================================================


let Checkboxs = document.querySelectorAll('.search-categories__checkbox');
let CheckboxTitle = document.querySelector('.search-page__title');
let ValueTitle = document.querySelector('.search-page__value');

$(function () {
	let isMobile = window.matchMedia("only screen and (min-width: 768px)").matches;

	if (isMobile) {
		for (let index = 0; index < Checkboxs.length; index++) {
			const Checkbox = Checkboxs[index];
			Checkbox.addEventListener('change', function (e) {
				Checkbox.classList.toggle('active');
				let ActiveCheckbox = document.querySelectorAll('.search-categories__checkbox.active');
				if (ActiveCheckbox.length > 0) {
					CheckboxTitle.classList.add('categories');
					ValueTitle.innerHTML = ValueTitle.getAttribute('data-text') + ' ' + ActiveCheckbox.length;
				} else {
					CheckboxTitle.classList.remove('categories');
				}
			});

		};
	} else {

	}
});
//===============================================================================================================================================================
$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.search-page__option').click(function (event) {
		$('.search-categories').toggleClass('active');
		$('.search-page__option').toggleClass('active');
	});

	$('.menu-page__burger').click(function (event) {
		$('.menu-page__burger_wrapper').toggleClass('active');
		$('.menu-page__burger').toggleClass('active');
		$('.menu-page__body').toggleClass('active');
		// $('.menu-page__body').slideToggle("200", function () {
		// 	// Animation complete.
		// });
	});
});

//===============================================================================================================================================================
// убираем placeholder
$('input').focus(function (e) {
	var $self = $(this);
	$self.data('data-value', $self.attr('placeholder'));
	$self.attr('placeholder', '');
});
$('input').blur(function (e) {
	var $self = $(this);

	$self.attr('placeholder', $self.data('data-value'));
});
//===============================================================================================================================================================

function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
//===============================================================================================================================================================

//Динамичный адаптив===============================================================================================================================================================
(function () {
	let original_positions = [];
	let da_elements = document.querySelectorAll('[data-da]');
	let da_elements_array = [];
	let da_match_media = [];
	//Заполняем массивы
	if (da_elements.length > 0) {
		let number = 0;
		for (let index = 0; index < da_elements.length; index++) {
			const da_element = da_elements[index];
			const da_move = da_element.getAttribute('data-da');
			const da_array = da_move.split(',');
			if (da_array.length == 3) {
				da_element.setAttribute('data-da-index', number);
				//Заполняем массив первоначальных позиций
				original_positions[number] = {
					"parent": da_element.parentNode,
					"index": index_in_parent(da_element)
				};
				//Заполняем массив элементов 
				da_elements_array[number] = {
					"element": da_element,
					"destination": document.querySelector('.' + da_array[0].trim()),
					"place": da_array[1].trim(),
					"breakpoint": da_array[2].trim()
				}
				number++;
			}
		}
		dynamic_adapt_sort(da_elements_array);

		//Создаем события в точке брейпоинта
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_breakpoint = el.breakpoint;
			const da_type = "max"; //Для MobileFirst поменять на min

			da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"));
			da_match_media[index].addListener(dynamic_adapt);

		}
	}
	//Основная функция
	function dynamic_adapt(e) {
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_element = el.element;
			const da_destination = el.destination;
			const da_place = el.place;
			const da_breakpoint = el.breakpoint;
			const da_classname = "_dynamic_adapt_" + da_breakpoint;

			if (da_match_media[index].matches) {
				//Перебрасываем элементы
				if (!da_element.classList.contains(da_classname)) {
					let actual_index;
					if (da_place == 'first') {
						actual_index = index_of_elements(da_destination)[0];
					} else if (da_place == 'last') {
						actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
					} else {
						actual_index = index_of_elements(da_destination)[da_place];
					}
					da_destination.insertBefore(da_element, da_destination.children[actual_index]);
					da_element.classList.add(da_classname);
				}
			} else {
				//Возвращаем на место
				if (da_element.classList.contains(da_classname)) {
					dynamic_adapt_back(da_element);
					da_element.classList.remove(da_classname);
				}
			}
		}
		custom_adapt();
	}

	//Вызов основной функции
	dynamic_adapt();

	//Функция возврата на место
	function dynamic_adapt_back(el) {
		const da_index = el.getAttribute('data-da-index');
		const original_place = original_positions[da_index];
		const parent_place = original_place['parent'];
		const index_place = original_place['index'];
		const actual_index = index_of_elements(parent_place, true)[index_place];
		parent_place.insertBefore(el, parent_place.children[actual_index]);
	}
	//Функция получения индекса внутри родителя
	function index_in_parent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function index_of_elements(parent, back) {
		const children = parent.children;
		const children_array = [];
		for (let i = 0; i < children.length; i++) {
			const children_element = children[i];
			if (back) {
				children_array.push(i);
			} else {
				//Исключая перенесенный элемент
				if (children_element.getAttribute('data-da') == null) {
					children_array.push(i);
				}
			}
		}
		return children_array;
	}
	//Сортировка объекта
	function dynamic_adapt_sort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function custom_adapt() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}

}());

//===============================================================================================================================================================


var marginSlider = document.querySelector('.filter__price');

noUiSlider.create(marginSlider, {
	start: [20, 100000],
	connect: true,
	tooltips: [true, true],
	margin: 30,
	range: {
		'min': 0,
		'max': 200000
	}
});