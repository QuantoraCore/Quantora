import time

def run_scheduled_tasks():
    print("🕓 Running scheduled background tasks...")
    for i in range(2):
        print(f"🔄 Task {i+1} executed")
        time.sleep(0.5)

if __name__ == "__main__":
    run_scheduled_tasks()