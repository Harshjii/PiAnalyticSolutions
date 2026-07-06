from PIL import Image
import os

def main():
    src_path = "public/assets/jii.jpeg"
    if not os.path.exists(src_path):
        print(f"Source file {src_path} not found.")
        return
        
    img = Image.open(src_path)
    w, h = img.size
    
    # The logo is wide (929x282). The emblem is in the left square (282x282).
    # Crop the left-most square of height x height
    square_size = h
    left_sq = img.crop((0, 0, square_size, square_size))
    
    # Save favicon-16x16.png
    fav_16 = left_sq.resize((16, 16), Image.Resampling.LANCZOS)
    fav_16.save("public/favicon-16x16.png")
    print("Saved public/favicon-16x16.png")
    
    # Save favicon-32x32.png
    fav_32 = left_sq.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save("public/favicon-32x32.png")
    print("Saved public/favicon-32x32.png")
    
    # Save apple-touch-icon.png (180x180)
    fav_180 = left_sq.resize((180, 180), Image.Resampling.LANCZOS)
    fav_180.save("public/apple-touch-icon.png")
    print("Saved public/apple-touch-icon.png")
    
    # Save favicon.ico (containing 16x16, 32x32, 48x48)
    sizes = [16, 32, 48]
    fav_ico_images = [left_sq.resize((size, size), Image.Resampling.LANCZOS) for size in sizes]
    
    # Save as ICO file containing multiple sizes
    fav_ico_images[0].save(
        "public/favicon.ico",
        format="ICO",
        append_images=fav_ico_images[1:]
    )
    print("Saved public/favicon.ico")

if __name__ == "__main__":
    main()
