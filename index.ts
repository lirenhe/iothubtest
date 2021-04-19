import IoTHub from "iotHubClient";
import { DefaultAzureCredential } from "@azure/identity";

async function main() {
  const subscriptionId = "<Subscription_Id>";
  const credential = new DefaultAzureCredential();
  const client = IoTHub(credential);

  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
      subscriptionId
    )
    .get();

  if (result.status !== "200") {
    throw result.body;
  }

  console.log(result.body.value?.map((hub) => hub.name).join("\n"));
}

main().catch(console.error);
