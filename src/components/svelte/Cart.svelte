<script>
  import { getContext, getAllContexts } from "svelte";
  const cartState = getContext("cartState");
  console.log("kkl", getAllContexts());
  let isOpen = cartState;
</script>

<div class:open={isOpen} class="cart-panel">
  <header>
    <h2>Your Cart</h2>
    <button class="close-cart">x</button>
  </header>
</div>

<style>
  :root {
    --shadow-color: 342deg 45% 39%;
    --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
  }
  .cart-panel {
    background-color: white;
    border: 1px solid #d20b47;
    width: 40%;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 9999;
    padding: 2rem 1rem;
    box-shadow: var(--shadow-elevation-high);
    display: none;
  }

  .cart-panel.open {
    display: block;
  }

  .open {
    display: block;
  }

  .cart-panel header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid hsla(342, 90%, 43%, 20%);
    padding-bottom: 2rem;
  }

  .cart-panel header button.close-cart {
    margin-left: auto;
    padding: 0;
    outline: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 2rem;
    color: #d20b47;
  }
</style>
