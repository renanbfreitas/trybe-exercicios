# 1
def clear(self):
    self.head_value = None
    self.__length = 0


# 2
def clear2(self):
    while not self.is_empty():
        self.remove_first()
