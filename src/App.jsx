import InputBox from './components'

function App() {
  const currencyOptions = ['usd', 'pkr', 'eur', 'gbp', 'cad', 'aud'];

  return (
    <>
      <section className="flex items-center justify-center gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div
            className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
            
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
          
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="..\assets\currencies.png"
                          alt="currencies" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Currency Converter
                        </h4>
                      </div>

                      <form>
                        <InputBox labelTxt='From' options={currencyOptions}/>
                        <div className="flex items-center flex justify-center pb-6">
                          <button
                            type="button"
                            className="my-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            Swap currency
                          </button>
                        </div>
                        <InputBox labelTxt='To' options={currencyOptions}/>
                      </form>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                    }}>
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We convert based on currency conversion rates!
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
