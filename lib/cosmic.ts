export async function getDataSobre() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/69c49046ec4fb6783710ac7d?pretty=true&read_key=${process.env.READ_KEY}&props=metadata`,
      { next: { revalidate: 120 } },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getDataProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22projects%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=metadata&sort=-order`,
      { next: { revalidate: 120 } },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
