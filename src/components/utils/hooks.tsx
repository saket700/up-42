import { useState, useEffect, useContext } from "react";
import { IProductDetails } from "./constants";

import { AppContext } from "./context";

const PRICE_API_URL = `/marketplace/blocks`;

const getMarketBlockData = async (url: string) => {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson.data;
};

export const useGetPrice = () => {
  const [listData, setListData] = useState<IProductDetails[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getMarketBlockData(PRICE_API_URL);
        setListData(
          response
            .filter(
              (item: any) =>
                item?.metadata?.blockPricingStrategy?.name === "simple"
            )
            .map((item: any) => ({
              id: item.id,
              displayName: item.displayName,
              credits: item?.metadata?.blockPricingStrategy?.credits,
            }))
        );
        setLoading(false);
      } catch (error: any) {
        setError(error);
      }
    })();
  }, []);

  return { error, listData, isLoading };
};

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error("AppContext must be used inside AppContextProvider");
  }

  return appContext;
};
