import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");
  return result.json();
}

export default async function Home() {

  const recipes = await getRecipes();

  
  return (
    <>
    <div className="grid grid-cols-3 gap-8">
      {recipes.map(recipe => (

      ))}
    </div>
    </>
  ) ;
}
