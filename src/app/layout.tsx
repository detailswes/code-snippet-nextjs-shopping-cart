"use client";
import "./globals.css";
import "./data-tables-css.css";
// import { useState, useEffect } from "react";
// import Loader from "../common/Loader";
import Header from "@/common/Header";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ErrorBoundary from "@/components/ErrorBoundary";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="">
            <div className="w-full">
              {/* <!-- ===== Content Area Start ===== --> */}
              <ErrorBoundary>
                <div className="p-0">
                  {/* <!-- ===== Header Start ===== --> */}
                  <Header />
                  {/* <!-- ===== Header End ===== --> */}

                  {/* <!-- ===== Main Content Start ===== --> */}

                  <main>
                    <div className="mx-auto  p-4 md:p-6 2xl:p-10">
                      {children}
                    </div>
                  </main>

                  {/* <!-- ===== Main Content End ===== --> */}
                </div>
              </ErrorBoundary>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
