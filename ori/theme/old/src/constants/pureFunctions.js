

export function transformName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}
export const getDeleteProductArguments = (index, name, quantityOrderedProducts) => {
  const lastProudctRemovedMessage = `Вы удалили  из корзины последний продукт "${name}" ಥ⌣ಥ.`;
  const removedProductMessage = `Вы удалили из корзины "${name}" ಠ_ಠ!`;

  return [
    	index, 
    quantityOrderedProducts - 1 === 0 ? lastProudctRemovedMessage : removedProductMessage,
    quantityOrderedProducts - 1
  ];
};

export const slideTo = selector => {
  const element = document.querySelector(selector);
  
  if (element)
    element.scrollIntoView({ behavior: 'smooth'});
};

export const cookiesHandler = {
  setUsernameAndPasswordToCookies: ({
    site,
    username,
    password
  }) => {
    localStorage.setItem(`${site}Password`, password);
    localStorage.setItem(`${site}Username`, username);
  },
  getUsernameAndPasswordFromCookies: site => (
    {
      username: localStorage.getItem(`${site}Username`),
      password: localStorage.getItem(`${site}Password`)
    }
  ),
  clearCookies: site => {
    localStorage.removeItem(`${site}Username`);
    localStorage.removeItem(`${site}Password`);
  }

};
export function timeout(callback, timeout) {
  // stuff for animating goes here
  let pastTime = 0;
  function animate(time) {
    if(!pastTime) {
      pastTime = time;
    }
    const delta = time - pastTime;

    if (delta >= timeout) {
      callback();
      console.log('end');
      return false;      
    }

    requestAnimationFrame(animate);
  }

  animate();
};

export const localData = {
  get: (key, isJSON=true) => {
    const value = localStorage.getItem(key);

    if (isJSON)
      return JSON.parse(value);

    return value;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  delete: (key) => {
    localStorage.removeItem(key);	
  }
};

export const convertDate = date => {
  return new Date(date).toLocaleDateString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });	
};
export const notFollow = event => {
  event.preventDefault();
	
  const url = event.target.href;
	  
  window.open(url);  
};

export function getArray(object) {
  let newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
