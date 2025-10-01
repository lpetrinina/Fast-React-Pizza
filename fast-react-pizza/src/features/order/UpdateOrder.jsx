import { useFetcher } from "react-router";

import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const inputStyle =
  'rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:ring focus:ring-yellow-400 focus:outline-none md:px-6 md:py-3';

function UpdateOrder({order}) {
    const fetcher = useFetcher(); 

    return (
        // fetcher.Form --> submit the form and revalidate the page
        <fetcher.Form method="PATCH" className="text-right space-x-2">
            <Button type='primary'>Make priority</Button>
        </fetcher.Form>

    
    )
}

export default UpdateOrder

export async function action({request, params}) {

  const data = {priority: true};

  await updateOrder(params.orderId, data);

   return null;
}
