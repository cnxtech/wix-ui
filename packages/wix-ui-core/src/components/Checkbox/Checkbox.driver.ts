export const checkboxDriverFactory = ({element, eventTrigger}) => {
  const getCheckboxStyle = () => window.getComputedStyle(element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** click on the element */
    click: () => eventTrigger.click(element),
    /** trigger mouseenter on the element */
    mouseEnter: () => eventTrigger.mouseEnter(element),
    /** trigger mouseleave on the element */
    mouseLeave: () => eventTrigger.mouseLeave(element),
    /** returns elements type attribute */
    getType: () => element.getAttribute('type'),
    /** checks if element is checked */
    isChecked: () => element.querySelector('[data-hook="NATIVE_CHECKBOX"]').checked,
    /** returns elements textContent */
    getTextContent: () => element.textContent,
    /** returns the checkbox children */
    children: () => element.querySelectorAll('[data-hook="CHECKBOX_CHILD_CONTAINER"]'),
    /** returns the checkbox tickmark */
    tickmark: () => element.querySelector('[data-hook="CHECKBOX_TICKMARK"]'),
    /** returns the checkbox native input */
    input: () => element.querySelector('[data-hook="NATIVE_CHECKBOX"]'),
    /** returns if the element is disabled */
    isDisabled: () => element.getAttribute('disabled') === '',
    styles: {
      /** returns elements min-width css property */
      getMinWidth: () => getCheckboxStyle().minWidth,
      /** returns elements width css property */
      getWidth: () => getCheckboxStyle().width,
      /** returns elements height css property */
      getHeight: () => getCheckboxStyle().height,
      /** returns elements padding css property */
      getPadding: () => getCheckboxStyle().padding,
      /** returns elements border-radius css property */
      getBorderRadius: () => getCheckboxStyle().borderRadius,
    }
  };
};
