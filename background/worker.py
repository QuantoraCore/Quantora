import time

def background_worker():
    print("🔄 Background sync started...")
    for i in range(3):
        print(f"⏳ Syncing... {i+1}")
        time.sleep(1)
    print("✅ Sync complete.")